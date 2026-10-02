// Data store of topics and their raw Overleaf LaTeX text
const notes = [
  {
    id: "1",
    title: "Field Description - Eulerian, Lagranginan, Hamiltonian",
    content: String.raw`\subsection*{Field Description - Eulerian, Lagranginan, Hamiltonian}
Describe continuous systems, but they are split across two completely different domains: the kinematics of a flow and the dynamics of a fundamental field.
\newline\linebreak
\textbf{Kinematics of Continua: Eulerian vs. Lagrangian}
\newline
When tracking a fluid or plasma, you have to decide where your observer is standing. This dictates how you measure changes in properties like velocity, density, or temperature.
\begin{enumerate}
    \item \textbf{Lagrangian(Riding the particle)}
    \begin{itemize}
        \item Tag a specific fluid parcel at t=0 and follow it as it moves through space.
        \item Coordinates are the particle's initial position and time($x_0,y_0,z_0,t_0$). 
        \item Physical intuition is sitting in a boat floating down a river - you measure how the water's temperature changes around you as you travel.
    \end{itemize}
    \item \textbf{Eulerian(Watching a checkpoint)}
    \begin{itemize}
        \item Pick a fixed coordinate in space($(x, y, z)$) and observe the fluid flowing past that point as time $t$ progresses.
        \item The physical intuition is standing on a bridge with a thermometer, measuring the water temperature at that exact geographic location over time.
    \end{itemize}
    \item \textbf{Math(Material Derivative)}
    \begin{itemize}
        \item Because physics applies to mass(the Lagrangian parcel), but our sensors and grids are usually fixed(Eulerian), we need a mathematical operator to translate between the two. 
        \item This is the Material/Substantial Derivative):
        $$\frac{D\text{v}}{Dt} = \frac{\partial \text{v}}{\partial t} + (\text{v}.\nabla)\text{v}$$
        \item $\frac{D\text{v}}{Dt}$ - total acceleration experienced by the moving particle(Lagrangian).
        \item $\frac{\partial \text{v}}{\partial t}$ - local rate of change at a fixed point(Eulerian).$(\text{v}.\nabla)\text{v}$ - convective term; accounts for the fact that the particle is moving into a region where the spatial field is different.
    \end{itemize}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.7\linewidth]{eul_lag.jpeg}
    \end{figure}
    \hrule
\end{enumerate}
\textbf{Dynamics of Fundamental Fields: Lagrangian \& Hamiltonian}
\newline
When we transition from tracking fluids to describing fundamental fields(EM field, quantum scalar field), we stop talking about Newton's laws and start talking about the Principle of Least Action.
\begin{enumerate}
    \item \textbf{Lagrangian Field Theory}
    \begin{itemize}
        \item Instead of tracking a discrete particle with a position($q(t)$) and a Lagrangian $L = T - V$, the field exists everywhere in space and time.
        \item We define a Lagrangian Density, $\mathcal{L}$ - fn of the field $\phi(x)$ and its spacetime derivatives $\partial_\mu \phi$. 
        \item The total action is the integral of this density over all four dimensions of spacetime:
        $$S = \int \mathcal{L}(\phi, \partial_\mu \phi) \, d^4x$$
        \item By demanding that the action is minimized($\delta S = 0$), we derive the Euler-Lagrange equations for the field, which give us the equations of motion (e.g., deriving Maxwell's equations from the EM Lagrangian). 
        \item It is relativistically invariant by design, which makes it the foundation of modern particle physics.
    \end{itemize}
    \item \textbf{Hamiltonian Field Theory}
    \begin{itemize}
        \item The Hamiltonian approach shifts the focus from "positions and velocities" to "positions and momenta".
        \item First, we define a conjugate momentum density $\pi(x)$ for the field:
        $$\pi(x) = \frac{\partial \mathcal{L}}{\partial \dot{\phi}}$$
        \item The Hamiltonian Density $\mathcal{H}$ is then constructed via a Legendre transformation:
        $$\mathcal{H} = \pi \dot{\phi} - \mathcal{L}$$
        \item Integrating $\mathcal{H}$ over 3D space gives the total energy of the field. 
        \item While the Lagrangian is preferred for relativistic mechanics(because time and space are treated equally in $\partial_\mu$), the Hamiltonian is incredibly powerful because it sets up the phase space required to quantize a field(leading to QFT) and establishes conservation laws via symmetries.
    \end{itemize}
    \hrule
\end{enumerate}
\textbf{But what are Eulerian, Lagrangian, Hamiltonian?}
\newline
They are mathematical frameworks or perspectives - like different operating systems for solving physics problems.
\begin{enumerate}
    \item \textbf{Eulerian - Grid Perspective}
    \begin{itemize}
        \item Strictly a perspective for observing continuous things(fluids) - traffic camera approach.
        \item If you want to know the wind speed in a hurricane, it is computationally impossible to track every single air molecule. Instead, you set up a fixed grid(Eulerian coordinates) and measure what passes through your grid points. You aren't tracking objects; you are tracking locations.
    \end{itemize}
    \item \textbf{Lagrangian - Energy Framework or Particle Perspective}
    \begin{itemize}
        \item Mathematical fn: $L=T-V$
        \item In fluids - perspective: exact opposite of Eulerian. It is the "GPS tracker on a car" approach. You tag a specific particle and follow it.
        \item In mechanics - framework: alternative to Newton's laws. Instead of drawing complex FBD and calculating vector forces, Lagrange realized nature is lazy and always takes the path of least resistance(the Principle of Least Action).
        \item If you write down that one eqn for a system, you don't need to know the forces. You just apply calculus to $L$, and it spits out the exact eqns of motion.
        \item It is incredibly powerful for complex systems like a double pendulum or a particle in a magnetic field, where calculating vector forces would be a nightmare.
    \end{itemize}
    \item \textbf{Hamiltonian - State Space Framework}
    \begin{itemize}
        \item Mathematical fn: $H=T+V$
        \item Instead of focusing on position and velocity(how fast things are changing), Hamilton focused on position and momentum.
        \item By swapping velocity for momentum, the math creates a perfectly symmetrical "phase space".
        \item While the Lagrangian is great for calculating how things move classically, the Hamiltonian's momentum-based math happens to be the exact language required to bridge classical physics into quantum mechanics and quantum field theory.
    \end{itemize}
\end{enumerate}
\hrule
`,
  },
  {
    id: "2",
    title: "Phase Space",
    content: String.raw`\subsection*{Phase Space}
Map of all possible physical states. In normal space(configuration space), a particle is just a point at $(x, y, z)$. But knowing where a particle is right now doesn't tell you where it's going next. Phase space fixes this by plotting both position and momentum simultaneously.
\newline
Every single point in phase space represents a complete state of the system — you know exactly where it is and exactly how fast it is moving.
\newline
eg: Motion of simple pendulum: \href{https://www.youtube.com/shorts/Vg28I6T1lpI}{video}
\newline\linebreak
\textbf{Phase Space Matrix - Transfer Matrix}
\newline
In fields like accelerator physics and laser optics, you aren't usually tracking one pendulum but tracking a beam of millions of particles or light rays. Instead of full 3D momentum, beam physicists and optical engineers usually define a particle's state by its transverse position $x$ and its angle $x'$. Since the angle dictates where it goes next, $x'$ acts as the momentum coordinate.The state vector of a single particle is just a column matrix:
$$\begin{pmatrix} x \\ x' \end{pmatrix}$$
When this particle travels through a physical component(focusing magnetic lens in ESM, curved glass lens in Zemax), its new position and angle are linearly dependent on its old position and angle. Because it's linear, we can calculate the particle's new state using a $2 \times 2$ Phase Space Matrix(Ray Transfer Matrix or ABCD Matrix).
$$\begin{pmatrix} x_{final} \\ x'_{final} \end{pmatrix} = \begin{pmatrix} A & B \\ C & D \end{pmatrix} \begin{pmatrix} x_{initial} \\ x'_{initial} \end{pmatrix}$$
A$\to$how new position depends on old position; B$\to$how new position depends on old angle; C$\to$how new angle depends on old position; D$\to$how new angle depends on old angle.
\hrule
`,
  },
  {
    id: "3",
    title: "Frame of Reference",
    content: String.raw`\subsection*{Frame of Reference}
In physics, whenever we describe a system's properties(like velocity, density, or frequency), we have to explicitly state who is doing the measuring. Frame of reference is just a set of coordinates(and a clock) tied to a specific observer.
\begin{enumerate}
    \item \textbf{Lab Frame}
    \begin{itemize}
        \item Frame attached to physical floor of lab/optical table/spectrometer/etc.,
        \item Standing still; see a laser(traveling at c) and watch it hit a plasma that is moving at some velocity(v).
        \item Variables don't have primes($x,t,\omega,k,...)$.
    \end{itemize}
    \item \textbf{Plasma Frame}
    \begin{itemize}
        \item Riding on the moving medium/particle which is moving at some v relative to the lab, i.e., object's rest frame.
        \item See the lab floor flying away from you at -v. You also see the laser pulse coming at you.
        \item Variables in this frame are denoted with primes($x',t',\omega',k',...$).
    \end{itemize}
\end{enumerate}
In laser plasma physics, particles move at relativistic speeds. Special relativity comes into play - you cannot just add or subtract velocities. Have to use Lorentz Transformations.
\newline\linebreak
\textbf{To solve problems:}
\begin{itemize}
    \item Define parameters in lab frame - controllable, measurable, ...
    \item Lorentz transform into plasma/particle rest frame.
    \item Do physical calculations, field eqns, etc., here as velocity is 0.
    \item Lorentz transform back to lab frame to see what detectors will read.
\end{itemize}
\hrule
`,
  },
  {
    id: "4",
    title: "Fourier Optics",
    content: String.raw``,
  },
];

let activeNoteId = notes[0]?.id || null;

document.addEventListener("DOMContentLoaded", () => {
  // Check if an ID was passed in the URL (e.g. ?id=5)
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get("id");

  // Keep topics sorted alphabetically
  notes.sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
  );

  // Pick targetId if present, else fallback to first alphabetical topic
  activeNoteId = targetId || notes[0]?.id || null;

  renderTopicList();
  renderCurrentNote();
});

// Render the list of topics in sidebar
function renderTopicList() {
  const list = document.getElementById("topic-list");
  list.innerHTML = "";
  notes.forEach((note) => {
    const li = document.createElement("li");
    li.className = `topic-item ${note.id === activeNoteId ? "active" : ""}`;
    li.textContent = note.title || "Untitled Document";
    li.onclick = () => {
      activeNoteId = note.id;
      renderTopicList();
      renderCurrentNote();
    };
    list.appendChild(li);
  });
}

// Convert active note's Overleaf LaTeX content into typeset HTML
function renderCurrentNote() {
  const current = notes.find((n) => n.id === activeNoteId);
  const target = document.getElementById("rendered-output");
  if (!current || !target) return;

  let text = current.content;

  // 1. Isolate and protect math and tables
  const protectedBlocks = [];
  const protect = (m) => {
    protectedBlocks.push(m);
    return `%%%BLOCK_${protectedBlocks.length - 1}%%%`;
  };

  text = text.replace(/\$\$([\s\S]*?)\$\$/g, protect);
  text = text.replace(/\$([^$]*?)\$/g, protect);
  text = text.replace(/\\begin\{vmatrix\}[\s\S]*?\\end\{vmatrix\}/g, protect);

  // 2. Parse LaTeX tabular, tabularx, and table environments
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

  // 3. Strip preambles
  text = text.replace(/\\documentclass\{.*?\}/g, "");
  text = text.replace(/\\usepackage(\[.*?\])?\{.*?\}/g, "");
  text = text.replace(/\\begin\{document\}/g, "");
  text = text.replace(/\\end\{document\}/g, "");

  // 4. Title blocks
  let docTitle = "",
    docAuthor = "",
    docDate = "";
  text = text.replace(/\\title\{([^}]+)\}/, (_, t) => {
    docTitle = t;
    return "";
  });
  text = text.replace(/\\author\{([^}]+)\}/, (_, a) => {
    docAuthor = a;
    return "";
  });
  text = text.replace(/\\date\{([^}]*)\}/, (_, d) => {
    docDate = d;
    return "";
  });
  text = text.replace(/\\maketitle/, () => {
    if (!docTitle) return "";
    return `<div class="maketitle"><h1>${docTitle}</h1><h3>${docAuthor}</h3></div>`;
  });

  // 5. Headings and structural tags
  text = text.replace(/\\section\*?\{(\\centering )?([^}]+)\}/g, "<h1>$2</h1>");
  text = text.replace(/\\subsection\*?\{([^}]+)\}/g, "<h2>$1</h2>");
  text = text.replace(/\\subsubsection\*?\{([^}]+)\}/g, "<h3>$1</h3>");
  text = text.replace(/\\textbf\{([^}]+)\}/g, "<strong>$1</strong>");
  text = text.replace(/\\hrule/g, "<hr>");

  // 6. Spacing and newlines
  text = text.replace(/\\newline\s*\\linebreak/g, "<br>");
  text = text.replace(/\\newline/g, "<br>");
  text = text.replace(/\\linebreak/g, "<br>");

  // 7. Lists
  text = text.replace(/\\begin\{itemize\}/g, "<ul>");
  text = text.replace(/\\end\{itemize\}/g, "</ul>");
  text = text.replace(/\\begin\{enumerate\}/g, "<ol>");
  text = text.replace(/\\end\{enumerate\}/g, "</ol>");
  text = text.replace(/\\begin\{description\}/g, "<dl>");
  text = text.replace(/\\end\{description\}/g, "</dl>");
  text = text.replace(/\\item\s*/g, "<li>");

  // 8. Figures and subfigures
  text = text.replace(
    /\\begin\{figure\}(\[.*?\])?([\s\S]*?)\\end\{figure\}/g,
    '<div class="figure">$2</div>',
  );
  text = text.replace(
    /\\begin\{subfigure\}\{.*?\}([\s\S]*?)\\end\{subfigure\}/g,
    '<div class="subfigure">$1</div>',
  );

  // RENDER REAL <img> TAG:
  text = text.replace(
    /\\includegraphics(\[.*?\])?\{([^}]+)\}/g,
    '<img src="$2" class="latex-img" alt="$2" />',
  );

  text = text.replace(/\\centering|\\hfill/g, "");

  // 9. Restore all protected blocks recursively (handles math nested inside tables)
  while (text.includes("%%%BLOCK_")) {
    text = text.replace(
      /%%%BLOCK_(\d+)%%%/g,
      (_, id) => protectedBlocks[Number(id)],
    );
  }

  target.innerHTML = text;

  // 10. Re-trigger MathJax to render equations inside cells
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetClear([target]);
    MathJax.typesetPromise([target]).catch((err) =>
      console.warn("MathJax err:", err),
    );
  }
}
