const eventDictionary = {
  phase1: {
    date: "Phase 1",
    title: "Theory and Fringe Analysis",
    content: String.raw`\begin{enumerate}
      \item Collinear and non-collinear interference, same color and 2-color interference theory.
      \item Simulate non-collinear interference fringes using Python.
      \item Initial interferometer design.
      \item Procure optics and optomechanics for initial experiment.
      \item Change in interferometer design - using mask to get 2 separate beams. 3D printed 1 mask.
      \item Started with diode laser(750nm, rectangular beam). Could not get required lenses for Galilean type beam expander, swithced to Keplarian using 6.3x microscope objective.
      \item Beam expands but width expansion is not enough for 7mm holes. Used only 6mm holes for intial data.
      \item Got 250mm lens for focusing. Saw interference fringes on camera. Leant how much exposure to set for camera to get good contrast. Took data for 6mm holes.
      \item Analyzed data using Python. Prepared basic reverse algorithm using 2D FFT and calculated fringe spacing, hole diameter - not accurate, mostly because of 2 reasons:
        \begin{itemize}
          \item Full circular beam profile not passing through 6mm holes, some diffraction from edges of holes.
          \item Optical alignment not precise. Not using any stage, moving all components by hand.
        \end{itemize}
      \item Analyzed focal spot. Learnt more about Gaussian fitting, FFT, etc.,
      \item Got green diode laser(532nm, circular beam). Same setup but because of circular c/s, beam is expanding to good dimensions. 3D printed 3 more different masks for more data.
      \item Observed fringes were very small, because of change in wavelength. Got 20x objective and set it up b/w focusing lens and camera. Got decent size fringes on camera. Took data for 3 masks.
      \item Horizontal and vertical fringes are forming efficiently. But any other orientation of holes, close distance not producing good fringes. Need to understand why.
      \item Objective not placed at exact focal/interference plane. Could not get another 200mm focusing lens to capture fringe pattern(object) onto camera sensor.
      \item Aquired data is of unkown magnification. Reverse algorithm not giving correct mask geometry.
      \item Green laser, focusing lens not available. Using red laser but rectangular c/s expansion isn't efficient. Couldn't get access to cylindrical lenses so trying to do spatial filtering to convert rectangular beam to circular c/s.
    \end{enumerate}`,
  },
  phase2: {
    date: "Phase 2",
    title: "Integrate with Astrella & Analyze Fringes",
    content: String.raw``,
  },
  phase3: {
    date: "Phase 3",
    title: "2 Color Interference",
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
