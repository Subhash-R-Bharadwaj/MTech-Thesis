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
    title: "Imaging",
    content: String.raw`\subsection*{Imaging}
Near-field and far-field dictate how we model light, how we simulate it, and what fundamental limits restrict our imaging resolution. The transition between them isn't just about physical distance; it is entirely about the curvature of the wavefronts relative to your observation plane.
\newline\linebreak
\textbf{Physical Intuition}
\newline
Imagine light passing through a small aperture or exiting a waveguide.
\begin{itemize}
    \item \textbf{Near-Field(Fresnel region)}: So close to the source that the light waves hitting your detector are still highly curved. The interference pattern is a complex, chaotic mapping of the aperture itself. If the aperture has a sharp edge, the near-field pattern has rapidly oscillating ripples right at the boundaries(Fresnel fringes).
    \item \textbf{Far-Field(Fraunhofer Region)}: Far enough away that the expanding spherical wavefronts have flattened out into plane waves by the time they reach you. The chaotic ripples smooth out into a clean, stable pattern that simply scales up in size as you move further away.
\end{itemize}
\textbf{Mathematical Boundary - Fresnel Number}
\newline
To determine which regime you are in mathematically, we use a dimensionless parameter called the Fresnel Number:
$$F = \frac{a^2}{L \lambda}$$
$a$ - characteristic size(radius) of your aperture or beam waist; $L$ - distance to your observation screen; $\lambda$ - wavelength.
\begin{itemize}
    \item F>>1(Near field) - Distance(L) is small. You must use the Fresnel diffraction integral. Mathematically, this means you are forced to keep the quadratic term($x^2$) in the phase expansion of the wave equation. The math here is very difficult to solve analytically.
    \item F<<1(far field) - Distance(L) is very large. The quadratic terms drop to zero. You only keep the linear terms, which collapses the massive diffraction integral into a simple 2D Spatial Fourier Transform.
\end{itemize}
\textbf{Far Field Imaging}
\begin{itemize}
    \item Capturing angular distribution(divergence/Fourier transform) of light, or using light to image macroscopic object.
    \item Apparatus for Laser Beam Profiling - working with a high-power femtosecond laser system, have to regularly check the far-field profile to ensure the beam isn't distorted.
    \begin{itemize}
        \item ND Filters/Wedge Prisms - cannot shoot a high power laser directly into a camera. You need highly reflective wedges to dump 99\% of the power, followed by absorptive ND filters.
        \item Fourier Lens - high quality spherical lens(Plano-Convex).
        \item CCD/CMOS Beam profiler - camera is mounted on a linear translation stage. Slide the camera precisely to the focal length of the lens. The image on the sensor is the pure far-field angular spectrum of the laser.
    \end{itemize}
    \item Apparatus for plasma/fluid diagnostics(Z-type Schlieren) - if generating a plasma and want to image the refractive index changes, you are operating in the far-field of the plasma.
    \begin{itemize}
        \item Probe Laser - secondary, synchronized low power laser pulse.
        \item OAP mirrors/spherical mirrors - 2 mirrors arranged in a "Z" configuration. The first collimates the probe beam through the plasma. The second focuses it.
        \item Knife edge(spatial filter) - Placed exactly at the focal point of the second mirror to block the un-refracted(zeroth-order) light.
        \item Imaging lens \& camera - Placed behind the knife-edge to relay the shadow/Schlieren image of the plasma onto the camera sensor.
    \end{itemize}
\end{itemize}
\textbf{Near Field Imaging}
\begin{itemize}
    \item Aims to capture spatial intensity distribution exactly at the surface of the emitter. Captures details/evanescent waves before they spread out/decay.
    \item Apparatus for macroscopic near-field(Relay Imaging): If you want to see the near-field mode of a photonic crystal fiber or a waveguide structure.
    \begin{itemize}
        \item Microscope objective lens(high NA) - placed just $\mu m$ away from the output facet of the waveguide. The high NA collects light at very steep angles.
        \item Tube lens - works with the objective to magnify the microscopic near-field image(often 40x-100x magnification).
        \item Precision multi-axis stage - sample must be mounted on a sub-micron resolution piezoelectric stage to align it perfectly with the objective's incredibly shallow depth of focus.
        \item Exactly what software like Ansys Lumerical simulates when you place a 2D frequency domain field monitor just nm above a simulated structure.
    \end{itemize}
    \item Apparatus for nanoscopic near-field(NSOM/SNOM): to break the diffraction limit and image surface features smaller than the wavelength of light (imaging plasmons on a metamaterial).
    \begin{itemize}
        \item Tapered optical fiber - glass fiber is stretched until the tip is roughly 50-100nm wide, then coated in Al so light can only escape through that tiny nanoscopic hole.
        \item AFM cantilever \& tuning fork - fragile fiber tip is mounted to a tuning fork vibrating at a specific frequency. As the tip approaches within 10nm of the surface, atomic shear forces dampen the vibration. A feedback loop uses this to keep the tip from crashing into the sample.
        \item Piezo scanners - sample is raster-scanned underneath the stationary tip point-by-point, pixel-by-pixel.
        \item APD/photomultiplier tube(PMT) - because the aperture is tiny, only a few photons make it through. You need highly sensitive single-photon counting detectors to build the image.
    \end{itemize}
\end{itemize}
\hrule
`,
  },
  {
    id: "5",
    title: "Ultrafast Imaging",
    content: String.raw`\subsection*{Ultrafast Pulse Imaging}
To capture an event that lasts a few fs(ignition of a plasma, electron accelerating in a wakefield) - there is no electronic shutter fast enough to freeze that action. The fastest photodiodes and oscilloscopes operate in the ps/ns regime.
\newline
To image ultrafast dynamics, we have to stop trying to make the camera fast, and instead make the light source fast.
\newline\linebreak
\textbf{Pump-Probe Technique}
\begin{itemize}
    \item \textbf{Split}: Main laser beam is split into two paths using a BS. One beam is the Pump(high energy), and the other is the Probe(low energy).
    \item \textbf{Pump}: Hits the target and initiates the physics; ionizes the gas, creates the plasma, or drives the shockwave.
    \item \textbf{Probe}: Routed through a mechanical delay line and then passes through the target at an angle perpendicular to the pump.
    \item \textbf{Strobe Effect}: Probe pulse illuminates the plasma for exactly Xfs(depending on pulse duration of main laser beam), casting a shadow(or a Schlieren image, or an interference pattern) onto a standard camera.
    \item Moving the delay stage by just $1.5\mu m$ delays the arrival of the probe by exactly 10fs($t = \frac{2d}{c}$). By firing the laser repeatedly and moving the stage micron by micron, we can build a stop-motion movie of the plasma dynamics, frame by frame at fs-scale.
\end{itemize}
\textbf{Group Delay Dispersion - GDD}
Consider a 35fs laser:
\begin{itemize}
    \item To make pump-probe imaging work, pulse must be 35 fs when it hits the target. But short pulses are incredibly fragile.
    \item The fundamental rule of ultrafast optics is the time bandwidth product. To create a pulse in the time domain($\Delta t$), we need a broad spectrum of colors in the frequency domain($\Delta \nu$).
    \item A 35fs laser isn't just one wavelength(eg: 800nm); it contains a bandwidth spanning from roughly 770nm to 830nm.
    \item When this broad spectrum travels through any dispersive medium(glass window on a vacuum chamber, water, air), the refractive index depends on the frequency($n(\omega)$).
    \item Blue light sees a higher refractive index than red light, so the blue frequencies travel slower.
    \item Mathematically, we describe how a material affects the pulse by expanding the spectral phase $\phi(\omega)$ as a Taylor series around the central frequency $\omega_0$:
    $$\phi(\omega) = \phi(\omega_0) + \phi'(\omega_0)(\omega - \omega_0) + \frac{1}{2}\phi''(\omega_0)(\omega - \omega_0)^2 + \dots$$
    $\phi(\omega_0)$ - absolute phase; $\phi'(\omega_0)$- Group Delay(how long it takes the peak of the pulse to travel through the material); $\phi''(\omega_0)$ - Group Delay Dispersion(GDD).
    \item GDD is measured in $fs^2$. If GDD is positive(normal dispersion), the red freq outruns the blue freq. The pulse spreads out in time, dropping its peak intensity and acquiring a "chirp"(freq changing with time). A 35fs pulse can easily stretch into a 500fs pulse just by passing through a thick piece of glass.
\end{itemize}
\textbf{Detectors for Ultrafast Optics}
\begin{enumerate}
    \item Target Imaging - Camera:
    \begin{itemize}
        \item To capture the interference fringes on liquid sheet or the Schlieren shadow of a plasma, use a standard CCD or CMOS scientific camera.
        \item The camera itself might have an integration time of a full millisecond, but it does not matter if the room is dark, and only light hitting the camera is the 35fs flash of the probe beam.
        \item The light provides the temporal resolution, not the camera.
    \end{itemize}
    \item Measuring the Pulse -
    \begin{itemize}
        \item To check if GDD has stretched the beam or not. Cannot be done using a photodiode.
        \item To measure a fs pulse, it has to measure itself $\to$ Autocorrelation, FROG, ...
    \end{itemize}
\end{enumerate}
\hrule
`,
  },
  {
    id: "6",
    title: "Interference and Delay Lines",
    content: String.raw`\subsection*{Interference and Delay}
Beam is split into 2 separate arms and recombined on a detector to see fringes. A delay line lengthens 1 arm.
\newline\linebreak
\textbf{Role of Coherence}
\begin{itemize}
    \item Coherence Length - length till which laser is in phase. 
    \item Random quantum noise inside the laser cavity causes the phase of the wave to randomly jitter or jump after a certain amount of time.
    \item Cheap laser - L$_c$~mm; Stable laser - L$_c\sim$m.
    \item To get interference fringes, path difference b/w arms must be less than L$_c$.
    $$\Delta L=|L_1-L_2|<L_c$$
    \item If $L_1=10cm>L_2$ but laser's $L_c\sim1mm$, the 2 waves arriving at the detector will have completely uncorrelated phases. They won't interfere - will just wash out into a flat, average brightness.
\end{itemize}
\textbf{Fringe Requirement}
\begin{itemize}
    \item Appearance of fringes comes down to two specific physical conditions - geometric overlap when combining; inherent path length difference compared to the source's coherence length($L_c$).
    \item \textbf{Geometric Requirement - Creating Stripes}
    \begin{itemize}
        \item If 2 beams recombine at BS2 perfectly parallel and exactly on top of each other(collinear) - we will not see fringes. Combined beam will have exact same phase difference so we will see single uniform spot - either fully bright or dark.
        \item To see alternating fringes, we must introduce slight angular tilt to one of the beams at BS2. Tilt creates continuously varying phase difference across transverse plane of the beam.
        \item If no BS2(non-collinear interaction) - recombination occurs only if beams intersect at an angle on the detector.
        \item Now fringes will be unavoidable - because waves collide at an angle, their wavefronts slice through each other creating continuous varying phase difference across overlap zone.
        \item Will always generate a periodic grating of bright and dark stripes(spatial fringes).
    \end{itemize}
    \item \textbf{Temporal Requirement - Path Difference}
    \begin{itemize}
        \item Even without explicit delay line, there will still be path difference($\Delta L=|L_1-L_2|$) because human hands and optical mounts are imperfect - at least mm path length difference.
        \item \textbf{CW lasers} - has $L_c$ ranging from 20cm-several m. $\Delta L < L_c$), the waves are perfectly correlated when they meet.
        \item \textbf{fs lasers} - A 35fs pulse has a coherence length of roughly 10$\mu$m. $\Delta L \gg L_c$ - pulse traveling the shorter arm will completely pass through interaction zone, long before the second pulse arrives.
    \end{itemize}
\end{itemize}
\textbf{1-Color Ultrashort Pulse}
\begin{itemize}
    \item Replace CW laser with 30fs 800nm laser.
    \item Instead of an endless stream, the light is a discrete bullet of energy flying through space. A 30fs pulse is physically only about 9$\mu$m thick.
    \item \textbf{Why delay?}
    \begin{itemize}
        \item Pulse is split into pump-probe. Pump does physics, probe takes image.
        \item By sending probe on a slightly longer physical path than pump, it arrives at the target a few trillionths of a second after pump - build a stop-motion movie of ultrafast physics.
    \end{itemize}
    \item \textbf{Coherence Length - Pulse Duration}
    \begin{itemize}
        \item For ultrashort pulse, L$_c$ is effectively equal to physical length of pulse - 30fs pulse : 9$\mu$m pulse length.
        \item To interfere 2 beams, their \textbf{path length difference($\Delta L$)} must be within pulse length - see "Path Length Optimization" for more.
        \item If you are using probe to take a shadowgraph picture of the pump's interaction, they don't need to interfere; only need to know exactly how much time separates them.
    \end{itemize}
\end{itemize}
\textbf{2-Color Ultrashort Pulses}
\begin{itemize}
    \item If pump and probe are the same color, the blinding glare from the intense pump scattering off the target will completely wash out the camera trying to capture the weak probe. 
    \item By converting probe to 400nm(SHG - blue) using a non-linear crystal, we can put a blue filter over camera lens.
    \item The camera becomes completely blind to the 800nm pump, capturing only the clean snapshot from probe.
    \item \textbf{Challenge of 2 colors - Dispersion}
    \begin{itemize}
        \item Light travels at $c$ in a vacuum, but in any material(glass of a lens, beam splitter, air), different colors travel at different speeds.
        \item The 400nm blue pulse will travel slower through a glass viewport than the 800nm red pulse.
        \item $\therefore$ cannot simply measure 2 arms to find exact moment both pulses hit target simultaneously - need to use \textbf{Cross-Correlation}:
        \begin{enumerate}
            \item Place BBO crystal.
            \item Sweep mechanical delay stage back and forth.
            \item When 800nm and 400nm pulses overlap in the crystal at the exact same fs, they generate a flash of a third color(Sum Frequency Generation, usually UV light).
            \item That flash tells exactly where delay stage must sit for $t=0$.
        \end{enumerate}
    \end{itemize}
\end{itemize}
\textbf{Hardware for Delay Lines}
\begin{itemize}
    \item Translation Stage - highly precise, motorized linear stage; must have excellent pointing stability. If the stage wobbles even slightly as it moves, the probe beam will tilt and physically miss the microscopic target.
    \item Hollow Roof Mirrors(Retroreflectors) - mount 2 flat mirrors at a perfect 90$^\circ$ angle on the stage; beam bounces off and returns parallel to its incoming path; use hollow mirrors(just coated glass reflecting off the front surface) rather than solid glass corner-cubes, because passing a fs pulse through inches of solid glass introduces dispersion, stretching the short pulse in time.
\end{itemize}
\hrule
`,
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
