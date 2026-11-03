const eventDictionary = {
  phase1: {
    date: "Phase 1",
    title: "Theory, Arduino-GCode Integration, CNC Stage Calibration",
    content: String.raw`\begin{enumerate}
      \item Learn about ESM ,LANEX screen.
      \item Understood Lorentz force, Hall effect and physics of ESM.
      \item Wrote Arduino code to control ESM stage using Stepper motors and A498N drivers.
      \item Tried to integrate Hall probe side with Arduino but Hall probe was not working properly.
      \item Got Arduino-GCode integration application from Abhisek.
      \item Calibrated CNC stage distance measurement.
    \end{enumerate}`,
  },
  phase2: {
    date: "Phase 2",
    title: "Magnetic Field Mapping and ESM Stage Assembly",
    content: String.raw`\begin{enumerate}
      \item Performed magnetic field mapping of ESM using Hall probe.
      \item Using csv data from magnetic field mapping, plotted 3D field map and 2D color plots.
      \item Understood about Fringe fields and effects.
      \item Using data simulated trajectory of electrons of different energies using Python. Yet to do in COMSOL.
      \item Assembled ESM stage with componetns from workshop. Ready to observe electrons.
    \end{enumerate}`,
  },
  phase3: {
    date: "Phase 3",
    title: "Observe Electron Beam from Astrealla-Droplet Interaction",
    content: String.raw``,
  },
};

function parseLatex(text) {
  if (!text) return "";
  let protectedBlocks = [];

  const protect = (match) => {
    protectedBlocks.push(match);
    return `%%%BLOCK_${protectedBlocks.length - 1}%%%`;
  };

  // Protect equations
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, protect);
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, protect);
  text = text.replace(/\$([^$]*?)\$/g, protect);
  text = text.replace(/\\\((.*?)\\\)/g, protect);

  // Parse LaTeX tabular, tabularx, and table environments
  text = text.replace(
    /\\begin\{table\}(\[.*?\])?([\s\S]*?)\\end\{table\}/g,
    (_, __, inner) => {
      let tableHtml = inner.replace(
        /\\centering|\\small|\\footnotesize|\\renewcommand\{.*?\}\{.*?\}/g,
        "",
      );

      // Strip from \begin{tabularx} up to \toprule or \hline to safely consume the entire column spec
      tableHtml = tableHtml.replace(
        /\\begin\{(?:tabularx|tabular)\}[\s\S]*?(?:\\toprule|\\hline)/,
        '<div class="table-container"><table><tbody><tr><td>',
      );

      // Fallback: If no \toprule exists, stop at the first \textbf{
      tableHtml = tableHtml.replace(
        /\\begin\{(?:tabularx|tabular)\}[\s\S]*?(?=\\textbf\{)/,
        '<div class="table-container"><table><tbody><tr><td>',
      );

      // Remove midrules and bottomrules
      tableHtml = tableHtml.replace(/\\midrule|\\bottomrule/g, "");

      // Close the table
      tableHtml = tableHtml.replace(
        /\\end\{(?:tabularx|tabular)\}/g,
        "</td></tr></tbody></table></div>",
      );

      // Convert LaTeX linebreaks (\\\\) to table rows
      tableHtml = tableHtml.replace(/\\\\(\s*\[.*?\])?/g, "</td></tr><tr><td>");

      // Convert LaTeX column separators (&) to table cells
      tableHtml = tableHtml.replace(/&/g, "</td><td>");

      // Parse formatting macros inside cells
      tableHtml = tableHtml.replace(
        /\\textbf\{([^}]+)\}/g,
        "<strong>$1</strong>",
      );
      tableHtml = tableHtml.replace(/\\textit\{([^}]+)\}/g, "<em>$1</em>");
      tableHtml = tableHtml.replace(/\\newline|\\linebreak/g, "<br>");

      // Clean empty/phantom rows
      tableHtml = tableHtml.replace(/<tr>\s*<td>\s*<\/td>\s*<\/tr>/g, "");

      return tableHtml;
    },
  );

  // Protect the newly formed table container
  text = text.replace(/<div class="table-container">[\s\S]*?<\/div>/g, protect);

  // Parse Lists (Process \item first before \end tags are replaced)
  text = text.replace(
    /\\item\s+([\s\S]*?)(?=\\item|\\end\{itemize\}|\\end\{enumerate\})/g,
    "<li>$1</li>",
  );
  text = text.replace(/\\begin\{itemize\}/g, "<ul>");
  text = text.replace(/\\end\{itemize\}/g, "</ul>");
  text = text.replace(/\\begin\{enumerate\}/g, "<ol>");
  text = text.replace(/\\end\{enumerate\}/g, "</ol>");

  // Text formatting & sections
  text = text.replace(/\\textbf\{([^}]+)\}/g, "<strong>$1</strong>");
  text = text.replace(/\\textit\{([^}]+)\}/g, "<em>$1</em>");
  text = text.replace(/\\section\*?\{([^}]+)\}/g, "<h2>$1</h2>");
  text = text.replace(/\\subsection\*?\{([^}]+)\}/g, "<h3>$1</h3>");

  // Newlines & paragraphs
  text = text.replace(/\\\\/g, "<br>");
  text = text.replace(/\n\n/g, "</p><p>");
  text = `<p>${text}</p>`;
  text = text.replace(/<p>\s*<\/p>/g, "");

  // Parse figure and subfigure environments
  text = text.replace(
    /\\begin\{figure\}(\[.*?\])?([\s\S]*?)\\end\{figure\}/g,
    '<div class="figure">$2</div>',
  );
  text = text.replace(
    /\\begin\{subfigure\}\{.*?\}([\s\S]*?)\\end\{subfigure\}/g,
    '<div class="subfigure">$1</div>',
  );

  // Convert \includegraphics to actual HTML image tags
  text = text.replace(
    /\\includegraphics(\[.*?\])?\{([^}]+)\}/g,
    '<img src="$2" class="latex-img" alt="$2" />',
  );

  // Convert \includevideo to HTML5 video tags
  text = text.replace(
    /\\includevideo(\[.*?\])?\{([^}]+)\}/g,
    '<video src="$2" class="latex-video" controls muted></video>',
  );

  // Clean up residual alignment tags
  text = text.replace(/\\centering|\\hfill/g, "");

  // Restore math and table blocks
  while (text.includes("%%%BLOCK_")) {
    text = text.replace(
      /%%%BLOCK_(\d+)%%%/g,
      (_, id) => protectedBlocks[Number(id)],
    );
  }

  return text;
}

document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const modal = document.getElementById("eventModal");
  const modalClose = document.getElementById("eventModalClose");
  const modalDate = document.getElementById("modalDate");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  timelineItems.forEach((item) => {
    item.addEventListener("click", () => {
      const eventId = item.getAttribute("data-event-id");
      const data = eventDictionary[eventId];

      if (data) {
        modalDate.textContent = data.date;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = parseLatex(data.content);

        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetClear([modalBody]);
          window.MathJax.typesetPromise([modalBody]);
        }

        modal.classList.add("active");
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () =>
      modal.classList.remove("active"),
    );
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
});
