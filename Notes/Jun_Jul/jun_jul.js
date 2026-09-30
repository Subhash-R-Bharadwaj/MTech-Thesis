// Data store of topics and their raw Overleaf LaTeX text
const notes = [
  {
    id: "1",
    title: "Difference between CW and pulsed lasers?",
    content: String.raw`\subsection*{Difference between CW and pulsed lasers?}
CW lasers emit constant power throughout, pulsed lasers emit high power in short, intense bursts. 
\begin{itemize}
    \item CW lasers: pumped continuously maintaining a steady population inversion, delivers even energy until turned off manually/electronically.
    \item Pulsed lasers: energy stored and dumped at once using q-switching or mode-locking, energy is delivered in very short time(~fs) so they achieve massive peak power.
\end{itemize}
\hrule`,
  },
  {
    id: "2",
    title: "Q-Switching?",
    content: String.raw`\subsection*{Q-Switching?}
Each laser system has a loss line. As population inversion increases, gain crosses loss line and laser energy is given out as pulse. No laser output till then. Until gain does not cross loss line, system has high Q-factor. Q-switching is achieved by various means - Mechanical(shutters, stoppers, ...), electro-optic effect, acousto-optic effect, etc., 
\hrule`,
  },
  {
    id: "3",
    title: "Mode locking?",
    content: String.raw`\subsection*{Mode locking?}
\hrule`,
  },
  {
    id: "4",
    title: "Pulse Width/Duration?",
    content: String.raw`\subsection*{Pulse Width/Duration?}
How long pulse lasts in time. Measured as FWHM - time b/w points where intensity is 50\% of peak. Shorter pulse width = higher peak power for same pulse energy.
$$\tau_p \approx k.\frac{E}{P_{peak}}$$
k - pulse shape factor: 0.94 for Gaussian, 0.88 for a $sech^2$ pulse  
\hrule`,
  },
  {
    id: "5",
    title: "Pulse energy?",
    content: String.raw`\subsection*{Pulse energy?}
Optical energy in 1 pulse.
$$P_{avg} = \frac{E}{T_r} = E*f_r$$
$T_r$ - pulse repetition time; $f_r$ - pulse repetition rate.
\hrule`,
  },
  {
    id: "6",
    title: "Pulse peak power?",
    content: String.raw`\subsection*{Pulse peak power?}
Max optical power reached during the pulse - how concentrated the energy is in time. Calculated from pulse energy and duration.
$$P_p \approx \frac{E_p}{\tau_p}$$
\hrule`,
  },
  {
    id: "7",
    title: "Average and peak power",
    content: String.raw`\subsection*{Average and peak power}
$$P_{avg} = P_{peak} * \textbf{Duty Cycle}$$
Duty Cycle = $\tau_p * f_r$
\hrule`,
  },
  {
    id: "8",
    title: "Beam quality - M^2?",
    content: String.raw`\subsection*{Beam quality - $M^2$?}
Measure of how closely the laser beam approximates an ideal Gaussian beam - essentially how well it can be focused. $M^2 = 1$ is perfect Gaussian
\hrule`,
  },
  {
    id: "9",
    title: "Intensity?",
    content: String.raw`\subsection*{Intensity?}
Measures total energy flux, which depends on number of photons and energy of each photon - which depends on frequency.
$$I = N * E$$
$$I_0=\frac{1}{2}\epsilon_0E_0$$
\hrule`,
  },
  {
    id: "10",
    title: "How to measure pulse duration for ultrafast pulses?",
    content: String.raw`\subsection*{How to measure pulse duration for ultrafast pulses?}
Ultrafast(ps/fs) pulses are vastly faster than the response time of electronics so they cannot be measure electronically using photodiodes or oscilloscopes. We have to use
\textbf{light tot measure light}. Few techniques are:
\begin{enumerate}
        \item \textbf{Optical Intensity Autocorrelation}:
        \begin{itemize}
            \item Standard lab method. Relies on Michelson interferometer config combined with a non-linear crystal(usually BetaBariumBorate[BBO]) to perform Second harmonic generation[SHG].
            \item Beam splitter splits pulse into 2 identical beams. One travels through fixed optical path, while other travels through movable delay arm(usually given by precise motorized translation stage) to introduce a time delay, $\Delta t$.
            \item Both pulses are focused on NLO crystal. When pulses overlap perfectly in space and time, they undergo SHG emitting light at exactly half the fundamental wavelength(eg: 800nm Ti:Sapphire laser emits 400nm blue light).
            \item Photodiode measure intensity of this frequency-doubled delay as function of path length. Resulting plot is Autocorrelation Trace. Width of trace at half its maximum height is $\Delta \tau_{ac}$
            \item To get true pulse duration, we multiply by deconvolution factor - 0.707 for Gaussian profile.
            $$\tau = \frac{\Delta \tau_{ac}}{\sqrt{2}}$$
        \end{itemize}
        \item \textbf{FROG - Frequency Related Optical Grating}
        \begin{itemize}
            \item Used to completely characterize the pulse - to get exact temporal intensity profile and phase profile.
            \item Setup almost similar to autocorrelator, but instead of photodiode to collect signal intensity, the non-linear output is directed into a spectrometer.
            \item Generates a 2D spectrogram(FROG trace) of wavelength vs time delay.
            \item Iterative phase retrieval algorithm acts on this trace to reconstruct exact electric field of the pulse.
        \end{itemize}
        \item \textbf{SPIDER - Spectral Phase Interferometry for Direct Electric-Field Reconstruction}
        \begin{itemize}
            \item Alternative to FROG that avoids iterative mathematical retrieval algorithms, offering real-time fast measurements.
            \item 2 replicas of short pulse are separated by fixed delay.
            \item They are mixed with NLO crystal with a 3rd, heavily chirped(stretched) pulse from same laser.
            \item Because chirped pulse changes frequency rapidly over time, 2 short pulses experience frequency doubling alongside 2 slightly different, highly specific frequencies.
            \item Resulting spectral interference pattern creates a fringe structure that allows a direct mathematical inversion(via Fourier transform) to reveal pulse phase and duration.
        \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "11",
    title: "Profiles?",
    content: String.raw`\subsection*{Profiles?}
\begin{enumerate}
    \item \textbf{Spatial Profile}:
    \begin{itemize}
        \item Describes how laser energy is distributed across a c/s of beam perpendicular to direction of propagation.
        \item For fundamental lasers, it is a Gaussian profile - intensity max at center and drops off symmetrically towards the edges.
        \item Characterized by beam waist/spot size($\omega_0$), measured using $\frac{1}{e^2}$ intensity point or spatial FWHM.
        \item Dictates how tightly laser beam can be focused. Perfect Gaussian beam can be focused to smallest possible diffraction-limited spot, that is critical for laser-plasma interactions.
    \end{itemize}
    \item \textbf{Temporal Profile:}
    \begin{itemize}
        \item Explains how power of laser pulse varies over time in fixed point in space.
        \item Modeled as Gaussian function. Determines peak power of laser.
    \end{itemize}
    \item \textbf{Phase Profile:}
    \begin{itemize}
        \item Intensity tells number of photons, phase profile tells when different frequency(color) components within the pulse arrive relative to each other.
        \item Ultrashort pulses are not monochromatic. Phase relationship between the colors determines pulse structure
        \item Transform Limited[Flat phase] - if phase profile is completely flat, all colors arrive at same time; this produces shortest possible temporal pulse width for given bandwidth.
        \item Chirped Pulse[Linear phase variation] - if phase varies linearly with freq, pulse becomes chirped/stretched in time; (i)Positive chirp: red(lower freq) arrives first, blue last; (ii)Negative chirp: blue arrives first, red last.
        \item Distorted phase profile stretches temporal pulse width, lowering peak power.
        \item Ultrafast physics relies on FROG/SPIDER to measure and flatten the phase profile using compressors(grating pairs/chirped mirrors) to get shortest pulse possible. 
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "12",
    title: "Beam properties?",
    content: String.raw`\subsection*{Beam properties?}
\begin{enumerate}
    \item \textbf{Beam Width/Radius($\omega_z$):}
    \begin{itemize}
        \item Describes physical size of laser beam c/s.
        \item By convention, beam radius is defined as radial distance from center of beam(max intensity) to point where intensity drops to $1/e^2$ peak value.
        \item Beam waist($\omega_0$) is the narrowest point of the beam along its path.
        \item As beam moves away from beam waist($z=0$), it diverges according to
        $$\omega_z = \omega_0\sqrt{1+(\frac{z}{z_R})^2}$$
        $\omega_0 = \frac{M^2\lambda f}{\pi \omega_l}$ ; $\omega_l$ - Beam radius
    \end{itemize}
\end{enumerate}
\textbf{Rayleigh range $z_R$:}
\begin{itemize}
    \item Distance along propagation axis from beam waist to place where beam's c/s area doubles. Meaning beam radius has increased by factor of $\sqrt{2}$.
    $$z_R = \frac{\pi \omega_0^2}{M^2\lambda}$$
    At $z=z_R, \omega(z_R) = \sqrt{2}\omega_0$
    \item Total distance between $-z_R$ and $+z_R$, length of $2z_R$ is the confocal parameter. This region is the laser's Depth of Focus. Within this zone, laser remains highly concentrated, relatively well confined, tightly focused. 
\end{itemize}
\textbf{Divergence:}
\begin{itemize}
    \item Beyond Rayleigh range($z>>z_R$), beam enters far-field region where it diverges linearly.
    \item Half angle of divergence is given as
    $$\theta \approx \frac{\lambda}{\pi \omega_0} = \frac{\omega_0}{z_R}$$
\end{itemize}
\hrule`,
  },
  {
    id: "13",
    title: "Synchronous beam?",
    content: String.raw`\subsection*{What is meant by synchronous beam? X-rays are produced by electrons that come first but a paper talks about synchronous electron and X-ray beams.}
\begin{itemize}
    \item A synchronous beam refers to a situation where two distinct beams(in this case, an electron bunch and a co-propagating X-ray pulse) travel together in perfect alignment across both space and time.
    \item $e^-$ driving these X-ray generation are highly relativistic. They are accelerated to MeV/GeV kinetic energies, meaning their velocity is incredibly close to $c$.
    \item Because $e^-$ travel at near $c$, the X-rays generated that travel at $c$ do not leave electron beam far behind.
    \item Instead X-ray and electron beams travel side-by-side but with X-rays ahead at imperceptibly slow relative rate. Over short distances ,they are effectively locked together.
\end{itemize}
\hrule`,
  },
  {
    id: "14",
    title: "MeV Temperature electrons?",
    content: String.raw`\subsection*{MeV Temperature electrons?}
In plasma physics, laser-matter interactions, and astrophysics, referring to particles (like electrons) as having an "MeV temperature" is a shorthand way of describing a thermalized system that is incredibly hot that the average kinetic energy of the particles is measured in MeV.
$$E_{thermal} = k_BT$$    
$1eV = 11,600K$; $1MeV = 11.6*10^9 K$(electron cloud temp.)
\hrule`,
  },
  {
    id: "15",
    title: "Non-linearity?",
    content: String.raw`\subsection*{Non-linearity?}
At high intensities, behavior of light changes non-linearly with 
\begin{enumerate}
    \item Linear Optics:
    \begin{itemize}
        \item At low light intensities, light passes through glass without altering the refractive index of the glass($n$). Light waves pass right through each other without interacting.
    \end{itemize}
    \item Non-Linear Optics:
    \begin{itemize}
        \item Under high intensity, the strong electric field of the light changes the electronic structure of the medium itself. The polarization($P$) depends non-linearly on the electric field($E$):
        $$P = \varepsilon_0 \left( \chi^{(1)}E + \chi^{(2)}E^2 + \chi^{(3)}E^3 + \dots \right)$$
        \item This leads to effects like self-focusing(Kerr effect), self-phase modulation, and second harmonic generation($800nm$ light turning into $400nm$).
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "16",
    title: "Plasmons? Two Plasmon Decay?",
    content: String.raw`\subsection*{Plasmons? Two Plasmon Decay?}
\begin{enumerate}
    \item \textbf{Plasmons:}
    \begin{itemize}
        \item Plasmons are quasiparticles of plasma oscillations. Collevtice, rhythmic oscillation of cloud of free $e^-$ relative to fixed positive ions in plasma.
        \item If you apply an external electric field (like a light wave) to a plasma or metal surface, it displaces the electron cloud. The attractive force between the displaced negative electrons and the remaining positive ions acts as a restoring force. Once the external field passes, the electrons rush back, overshoot their original positions, and begin oscillating at a specific frequency called the plasma frequency ($\omega_p$).
    \end{itemize}
    \item \textbf{TPD:}
    \begin{itemize}
        \item Non-linear instability that occurs when intense laser pulse interacts with plasma.
        \item In this process, a high-energy incoming light wave(photon) splits into two plasmons(electron plasma waves).
        $$\text{Photon} (\omega_0, \vec{k}_0) \longrightarrow \text{Plasmon}_1 (\omega_{p1}, \vec{k}_1) + \text{Plasmon}_2 (\omega_{p2}, \vec{k}_2)$$
        \item For TPD to happen, the interaction must satisfy the strict conservation laws of energy and momentum:
        $$\text{Energy Conservation: }\omega_0 = \omega_{p1} + \omega_{p2}$$
        $$\text{Momentum Conservation: }\vec{k}_0 = \vec{k}_1 + \vec{k}_2$$
        \item Because electron plasma waves oscillate at roughly the local plasma frequency ($\omega_p$), the sum of the two plasmon frequencies ($2\omega_p$) must equal the laser frequency ($\omega_0$).
        \item TPD can only occur in a very specific region of a plasma density ramp: where the electron density is exactly one-quarter of the critical density ($n_e = 0.25 \, n_c$). This region is universally known as the quarter-critical density region.
    \end{itemize}
    \item \textbf{Laser parameters for TPD:}
    \begin{itemize}
        \item The laser beam must have an incredibly high intensity to overcome the natural damping mechanisms of plasma.
        \item The TPD threshold is heavily dependent on the laser's wavelength. The growth rate of the instability is proportional to the laser field parameter, meaning longer wavelengths drive TPD much more efficiently.
        \item But shorter wavelengths are preferred as intensity threshold is inversely proportional to wavelength. Thus, shorter wavelength increases threshold and keeps plasma stable. 
        \item TPD requires time to grow from background thermal noise into a full coherent plasma wave.
        \item Growth Time: The instability grows exponentially on a fs timescale.
        \item Therefore, the laser pulse must maintain its peak intensity for a long enough duration—typically on the scale of hundreds of ps to ns(long pulses), allowing the instability to reach its convective saturated regime. While ultrashort fs pulses can reach the required intensities easily, they often pass through the medium too quickly for classical long-scale convective TPD to fully compromise the target plasma.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "17",
    title: "Coherence?",
    content: String.raw`\subsection*{Coherence?}
Correlation of phase-sync between any 2 points in time/space. Determines how well light source can produce stable, predictable interference patterns. 
\begin{enumerate}
    \item \textbf{Temporal Coherence}
    \begin{itemize}
        \item Measures consistency of phase over time.
        \item If you measure the phase of a light wave at a specific point in space at time $t$, and can reliably predict its phase at a later time $t + \Delta t$, the wave is temporally coherent over that delay $\Delta t$. 
        \item Coherence Time($\tau_c$) is the maximum time delay over which the wave remains phase-correlated. It is inversely proportional to the spectral bandwidth ($\Delta \nu$) of the source.
        \item Coherence Length ($L_c$) is the physical propagation distance over which the light remains coherent
        $$L_c = c. \tau_c \approx \frac{\lambda^2}{\Delta \lambda}$$
        \item CW laser has narrow bandwidth($\Delta \lambda$) so large coherence length. But ultrashort pulse beams have large bandwidth, so low coherence length. 
        \item Determined by spectral bandwidth. Determines alignment tolerances for interferometers and pump-probe delays
    \end{itemize}
    \item \textbf{Spectral Coherence}
    \begin{itemize}
        \item Measures the phase relationship between different points across the c/s(wavefront) of the beam at the exact same instant in time. Uniform phase across the c/s.
        \item If you take two different spatial points on a beam's wavefront(left edge and the right edge) and they maintain a fixed, predictable phase relationship over time, the beam has high spatial coherence.
        \item High spatial coherence is what allows a laser beam to remain highly directional over long distances and focus down to a tiny, diffraction-limited spot($d_0$).
        \item \textbf{Determined by source size and phase uniformity. Determines how tightly a laser can focus and it's propagation divergence.}
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "18",
    title: "Importance of coherence?",
    content: String.raw`\subsection*{Importance of coherence?}
\begin{itemize}
    \item Enables proper interference. If light were incoherent, phase would randomize instantaneously, washing out interference fringes into a blur.
    \item \textbf{High Spatial coherence} allows the entire wavefront to be bend in unison when passing through a lens, focusing down to absolute smallest physical spot size(diffraction limited spot size)
    $$2\omega_0 = d_0 \approx \frac{4M^2\lambda f}{\pi D}$$
    \item \textbf{High Spatial coherence} is what allows lasers to achieve high peak intensities.
    \item \textbf{Temporal coherence} governed by $\Delta \lambda$, defines coherence length - distance over which light wave remains in phase.
    \item \textbf{High Temporal coherence} - long $L_c$ : Essential for high-res spectroscopy; \textbf{Low Temporal coherence} - short $L_c$ : Useful in Optical Coherence Tomography(OCT)
\end{itemize}
\hrule`,
  },
  {
    id: "19",
    title: "How is coherence measured and studied?",
    content: String.raw`\subsection*{How is coherence measured and studied?}
In lab, separate coherence into 1st-order coherence(amplitude correlations) and 2nd-order coherence(intensity/photon correlations) and utilize specific interferometric techniques to measure both. The fundamental quantitative metric for almost all coherence measurements is Fringe Visibility($V$), defined by the Michelson visibility formula,
$$V = \frac{I_{max}-I_{min}}{I_{max}+I_{min}}$$
$$I_{max}, I_{min} - \text{ max and min I of interference pattern}$$
Perfect coherence yields $V=1$(complete constructive and destructive interference), while completely incoherent light yields $V=0$(no fringes, just a uniform background).
\begin{enumerate}
    \item \textbf{Measuring Temporal Coherence:}
    \begin{itemize}
        \item Michelson. Measured by introducing a variable, controlled time delay. 
        \item Beam splitter splits beam into 2 arms.
        \item Movable mirror is mounted on linear translation stage. Moving this mirror by $\Delta x$ introduces a round trip time delay:
        $$\tau = \frac{2\Delta x}{c}$$
        \item When beams combine, fringe visibility($V$) as function of delay($\tau$) is recorded. 
        \item This curve represents the magnitude of the 1st-order temporal coherence function, $|g^{(1)}(\tau)|$. \textbf{The delay time at which the visibility drops to $1/e$ of its maximum value is defined as the coherence time($\tau_c$)}. Corresponding physical distance is the coherence length($L_c=c\tau_c$).
    \end{itemize}
    \item \textbf{Measuring Spatial Coherence:}
    \begin{itemize}
        \item Young's double slit. Measured by taking light from two distinct physical locations across the beam and letting them overlap.
        \item 2 slits in the path of wavefront. Slits are separated as $d = |x_1 - x_2|$.
        \item Diffracted light creates interference pattern. Fringe visibility($V$) is measured for separation $d$.
        \item By increasing the separation $d$ between the two slits and recording the visibility, map out the mutual coherence function $\Gamma(x_1, x_2)$.
        \item The separation $d$ at which the fringe visibility drops below a specific threshold (often $0.88$ by the Michelson standard or $1/e$) defines the transverse spatial coherence length($L_s$).        
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "20",
    title: "How to check for beam collimation without spot size?",
    content: String.raw`\subsection*{How to check for beam collimation without spot size?}
\textbf{Shearing Interferometer}
\begin{itemize}
    \item Laser beam hits $45\degree$ plate and reflections from front and back surface combine to give interference fringes.
    \item If fringes are linear and exactly parallel to detector plane, beam is collimated. Tilted/curved fringes means beam isn't collimated.
\end{itemize}
\begin{figure}[H]
    \centering
    \includegraphics[width=1\linewidth]{img.PNG}
\end{figure}
\hrule`,
  },
  {
    id: "21",
    title: "Wavefront?",
    content: String.raw`\subsection*{Wavefront?}
Imaginary surface connecting all adjacent points of a wave that are vibrating in phase. 
\begin{enumerate}
    \item Spherical: produced by ideal isotropic point source. Light travels outward at equal speeds in all directions, forming concentric spheres.
    \item Cylindrical: produced by linear source(light passing through narrow vertical/horizontal slit). 
    \item Plane wavefronts: if spherical wavefront travels farther from source, radius of curvature becomes so small that locally it behaves like a plane wavefront.
\end{enumerate}
\hrule`,
  },
  {
    id: "22",
    title: "Harmonics?",
    content: String.raw`\subsection*{Harmonics?}
Refers to light waves generated at integer multiples of fundamental laser freq($\omega_0$). When an intense laser beam passes through a non-linear medium, the medium's $e^-$ don't just oscillate at the incoming frequency; they react non-linearly, radiating light at double, triple, or hundreds of times the original frequency.
\begin{itemize}
    \item In standard, low intensity optics, the electric field of light(E) induces a electric dipole polarization density(P) in a material that is purely linear:
    $$P = \varepsilon_0 \chi^{(1)}E$$
    \item However, high intensity pulsed lasers(fs/ps systems) produce electric fields strong enough to rival the Coulomb forces holding $e^-$ to their atomic nuclei. The material's response becomes non-linear and is written as a Taylor expansion:
    $$P = \varepsilon_0 \left( \chi^{(1)}E + \chi^{(2)}E^2 + \chi^{(3)}E^3 +... \right)$$
    where: $\chi^{(1)}$ - Linear susceptibility(refraction, absorption); $\chi^{(2)}$ - 2nd order non-linear susceptibility $\rightarrow$ Second-Harmonic Generation(SHG); $\chi^{(3)}$: 3rd order non-linear susceptibility $\rightarrow$ Third-Harmonic Generation(THG), self-focusing.
    \item For an incident monochromatic field, $E(t)=E_0cos(\omega t)$
    $$P^{(2)}(t)=\epsilon_0\chi^{(2)}E_0^2cos^2(\omega t)=\frac{1}{2}\epsilon_0\chi^{(2)}E_0^2(1+cos(2\omega t))$$
    $$\text{1st term represents a static DC electric polarization(optical rectification}\ \to\ \frac{1}{2}\epsilon_0\chi^{(2)}E_0^2)$$
    $$\text{2nd term oscillates at }2\omega\text{ driving dipole radiation at double fundamental freq.}$$
    \item Each higher order term acts as a new source term in Maxwell's wave equations, generating light at higher frequency multiples.
\end{itemize}    
\hrule`,
  },
  {
    id: "23",
    title: "Lower order harmonics?",
    content: String.raw`\subsection*{Lower order harmonics?} 
\begin{enumerate}
    \item SHG - freq doubling
    \begin{itemize}
        \item 2nd order nonlinear process where photons of freq $\omega_$ combine to create a single photon of freq $2\omega_$($\equiv\lambda /2$).
    \end{itemize}
    \item THG - freq tripling
    \begin{itemize}
        \item Generates light at 3$\omega_0$. 
        \item Can happen directly via $\chi^{(3)}$ processes in gases/solids. Or more commonly through 2 step process $\rightarrow$ SHG + mixing($1\omega_0\ +\ 2\omega_0\ =\ 3\omega_0$).
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "24",
    title: "High harmonic generation?",
    content: String.raw`\subsection*{High harmonic generation?}
When laser intensities exceed $10^{14}W/cm^2$, standard perturbation theory breaks down. Interactions produce a comb of odd harmonics stretching to 100th order or higher into extreme-UV and soft X-ray regimes.
\hrule`,
  },
  {
    id: "25",
    title: "Pre-pulse and pedestal?",
    content: String.raw`\subsection*{Pre-pulse and pedestal?}
Pre-pulses and the pedestal refer to unwanted laser energy that leaks out before the main pulse hits the target. If this early energy is too strong, it can ruin your entire experiment before the real laser pulse even gets a chance to shine.
\begin{itemize}
    \item Pre-pulse: Distinct, sharp, temporary spike of laser energy that arrives anywhere from picoseconds to tens of nanoseconds before the main pulse. Usually caused by spurious reflections or optical leakage inside the laser chain. For instance, a tiny fraction of the pulse might reflect off the back surface of an optical mirror or polarizer, traverse a slightly different path, and leak out ahead of the primary pulse as a mini "ghost" pulse.
    \item Pedestal: Broad, continuous "floor" or background of laser light that sits directly under and ahead of the main pulse. It typically lasts for a few ns before the main fs pulse arrives. Mainly caused by Amplified Spontaneous Emission(ASE) in the laser system. When laser amplifiers are pumped with energy waiting for the main seed pulse, some atoms spontaneously emit light early. That stray light gets amplified alongside everything else, creating a long, low-intensity noise floor.
\end{itemize}
\hrule`,
  },
  {
    id: "26",
    title: "Electron Spectrometer - ESM?",
    content: String.raw`\subsection*{Electron Spectrometer - ESM?}
Diagnostic device to measure the energy spectrum and angular distribution of an electron beam.
\begin{itemize}
    \item Works using the Lorentz Force Law. When a moving charged particle passes through a magnetic field, it experiences a force perpendicular to both its direction of motion and the magnetic field.$$F = q(\mathbf{v} \times \mathbf{B})$$
    \item Because the force acts perpendicular to velocity, it acts as a centripetal force, bending the electron into a circular path:$$q v B = \frac{m v^2}{r} \implies r = \frac{\gamma m_0 v}{q B}$$
    where, $r$ - radius of curvature; $B$ - magnetic field strength; $q$ - charge; $m_0$ - rest mass of $e^-$; $\gamma$ - relativistic Lorentz factor (crucial for high-energy/relativistic electron beams).
    \item Lower-energy $e^-$ have less momentum and are bent sharply with a small radius $r$. Higher-energy (faster) $e^-$ have high momentum and resist bending, traveling with a much larger radius.
    \item Components of ESM - 
    \begin{enumerate}
        \item Collimator: Before entering the magnetic field, the messy electron beam passes through a narrow aperture(usually Pb or W). This forces the $e^-$ into a tight, pencil-thin beam traveling in a well-defined direction, ensuring all $e^-$ enter the magnetic region from the exact same starting line.
        \item Magnetic Region/Dipole: The collimated beam enters a gap between two permanent magnets or electromagnets generating a uniform magnetic field ($B$). As the electrons travel through this region, their paths fan out into a spectrum based on their individual energies.
        \item Detector Array: Positioned downstream from the magnet is a position-sensitive detector—such as an Image Plate(IP), a phosphor screen(LANEX) coupled to a CCD camera, or a scintillator array. Because energy corresponds directly to spatial deflection($x$), where the electron hits the detector tells you its energy: Position($x$) $\rightarrow$ Electron Energy($E$); Signal Intensity/Brightness($I$) $\rightarrow$ Number of $e^-$(Charge).
    \end{enumerate}
\end{itemize}    
\hrule`,
  },
  {
    id: "27",
    title: "LANEX Screen?",
    content: String.raw`\subsection*{LANEX Screen?}
Phosphor screen. Falling $e^-$ induce phospholuminescence - light is measured by CCD camera behind the screen.
\hrule`,
  },
  {
    id: "28",
    title: "ESM - components?",
    content: String.raw`\subsection*{ESM - components?}
\begin{enumerate}
    \item IRF540 - MOSFET
    \begin{itemize}
        \item High power N channel MOSFET.
        \item It acts as a digital gate. When a small voltage(typically around 5V or higher) is applied to its Gate pin, it opens up a massive channel between its Drain and Source pins, allowing large currents to flow instantly with very little resistance. It is standard for driving heavy loads like DC motors, solenoids, high-power LEDs, or electromagnet coils.
        \item Allows 5V Arduino to control 12V hardware. IRF540 listens to your control signal and handles the heavy lifting—safely switching the higher current and voltage needed to move components or fire relays in your diagnostic loop.
    \end{itemize}
    \item LM358N - Dual Op Amp
    \begin{itemize}
        \item Chip containing two independent operational amplifiers in a single 8-pin package.
        \item They are used to amplify tiny electrical signals, filter out electrical noise, compare two voltages (acting as a comparator), or buffer high-impedance signals.
        \item Amplifies faint electrical signals coming from Hall probe before feeding to ADC.
    \end{itemize}
    \item K-pot - Knob/Panel-mount Potentiometer
    \begin{itemize}
        \item 3 terminal variable resistor operated by a rotating knob(tripot). Can tune manually using a screwdriver.
        \item Acts as a manually adjustable voltage divider. By turning the physical knob, you change the electrical resistance which varies the output voltage at its middle pin(wiper) smoothly from 0V up to your full supply voltage. Allows to manually control V/I through a path.
        \item Here, it works with LM358N+IRF540 to calibrate baseline current to Hall probe.
    \end{itemize}
    \item ADS1115 - ADC
    \begin{itemize}
        \item 16 bit Analog-to-Digital Converter. Allows digital microcontrollers(like an Arduino, Raspberry Pi, ESP32) to read analog signals with high precision using the $I^2C$(inter-integrated circuit) communication protocol.
        \item 16-bit means it breaks an analog voltage range into 65,536 discrete steps(only 1024 in an 10-bit Arduino). 
        \item Reads small voltage shifts generated by Hall probe more accurately than Arduino. Converts the Hall voltage analog to clean digital data for Arduino to process. 
        \item Has 4 pins that read voltage. ALRT pin for emergency alerts, ADDR pin to locate by Arduino using $I^2C$ communication.
    \end{itemize}
    \item 7805 Regulator
    \begin{itemize}
        \item Classic 3-pin linear voltage regulator IC. It belongs to the legendary $78xx$ series of fixed linear regulators, where "05" stands for its output voltage(5V).
        \item Takes high incoming 12V and steps it down to clean 5V to power Hall sensor, ADC and lighter electronics.
        \item Acts as safety barrier.
        $$
            \circ \, i/p
            \newline   
            \circ \, gnd
            \newline
            \circ \, o/p
        $$
    \end{itemize}
    \item A4988 - Stepper Driver
    \begin{itemize}
        \item Complete microstepping motor driver IC with a built-in translator, usually mounted on a small breakout board with a tiny potentiometer on top.
        \item Translates low power(5V) digital Arduino commands into high 12V electric bursts needed to drive motor.
        \item Specifically built to drive bipolar stepper motors. It translates two simple input signals from a controller - STEP(take one step) and DIR(CW/CCW) into the complex, phased current sequences needed to energize the motor's internal coils.
        \item It also features microstepping, which divides a single full step into fractional steps by regulating coil current. Has 3 microsteps(MS1/MS2/MS3), microstep res(1/8, 1/16,...) can be changed by combination of connections.
        \item Has 4 pins for 2 coils of the motor(1A/1B/2A/2B). DIR pin changes direction. STEP pin gets 0-2.5V \& each high/low pulse causes rotation.
    \end{itemize}
    \item Stepper Motor
    \begin{itemize}
        \item Stepper motor is a brushless, DC electric motor that divides a full $360^\circ$ rotation into a large number of equal, discrete steps (typically 200 steps per revolution, or $1.8^\circ$ per step).
        \item Has 2 coils - creates magnetic field when electricity flows. Magnetic field orientation causes specific rotation of shaft.
        \item Unlike standard DC motors that spin continuously when powered, a stepper motor rotates in precise, incremental angles. It uses electromagnets arranged in a ring to lock the central rotor into specific positions. Because each pulse moves the motor by a known angle, you can achieve open-loop position control—meaning you can control exact position and speed without needing a separate position encoder or feedback sensor.
    \end{itemize}
    \item Limit Switches
    \begin{itemize}
        \item Electromechanical device consisting of a physical actuator(small lever, roller, button) mechanically linked to a set of electrical contacts.
        \item Sends instant signal to micro-controller to stop moving or change direction.
        \item Triggered exactly when bumped by moving part. Sends LOW signal when triggered, or inherently HIGH.
        \item Here, connected to Arduino to run homing sequence and emergency brake.
    \end{itemize}
    \item Hall Probe
    \begin{itemize}
        \item Highly precise, sensitive 4-terminal sensor used to measure the strength and direction of a magnetic field. 
        \item Here, it is used to map out the exact magnetic field strength($B$) in real time to accurately calibrate system.
        \item Inside the tip of a Hall probe sits a tiny, thin slab of conductive or SC material(usually InAs).
        \item Constant  current(I) is pushed through the slab from one end to the other. When you place this probe inside a magnetic field(B), the moving $e^-$ experience a magnetic force perpendicular to their motion. This force pushes $e^-$ to one side of the slab, leaving a surplus of positive charge on the opposite side.
        \item This separation of charges creates a measurable E and produces small analog O/P voltage(Hall voltage) proportional to magnetic field strength.
        \begin{equation}
            V_H = \frac{I\, B}{n\, q\, t} = R_H \cdot \frac{I \cdot B}{t}
        \end{equation}
        where, I - current; B - Mag. field strength; n - charge density; q - charge; t - thickness of Hall element/conductor; $R_H$ - Hall coefficient.
        \item Has 4 pins - 1 to 5V supply. 1 to 0V(GND line). 2 to analog pins of ADV to read voltage.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "29",
    title: "Stepper Motor, resolution?",
    content: String.raw`\subsection*{Stepper Motor, resolution?}
\begin{figure}[H]
\centering
\begin{subfigure}{0.45\textwidth}
    \includegraphics[width=\linewidth]{IMG_6847.jpg}
\end{subfigure}
\hfill
\begin{subfigure}{0.45\textwidth}
    \includegraphics[width=\linewidth]{IMG_6848.jpg}
\end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "30",
    title: "12V, 5V, grounding and connections?",
    content: String.raw`\subsection*{12V, 5V, grounding and connections?}
\hrule`,
  },
  {
    id: "31",
    title: "Angana Mondal thesis - Laser Droplet Interaction",
    content: String.raw`\subsection*{Angana Mondal thesis - Dynamics of Relativistic $e^-$ Generation in Laser Droplet Interaction at $10^{16} W/cm^2$?}
\includepdf[pages=-]{thesis.pdf}
\hrule`,
  },
  {
    id: "32",
    title: "Imaging - challenges?",
    content: String.raw`\subsection*{Imaging - challenges?}
Objective - Optimize laser-plasma interaction parameters to produce reproducible high energy $e^-$ beams with low energy spread and low emittance.
\begin{itemize}
    \item Lags in imaging:
    \begin{itemize}
        \item Derived X-ray source varies from shot-to-shot - no stability/reproducibility.
        \item Imaging needs quasi-monoenergetic radiation but plasma sources have broad bandwidth.
        \item Source beam must be highly bright with low divergence and good coherence.
    \end{itemize}
    \item For repeatable imaging, source has to deliver similar X-ray flux and spectrum, shot after shot.
    \item Reasons for shot-to-shot variation:
    \begin{itemize}
        \item Pre-plasma($\because$ ASE - amp. sp. emission, $\because$ pedestal)
        \item Spatial jitter limits - focus.
        \item Non-linear power jitter amplification.
        \item Environmental feedback - thermal, imperfect vacuum,...
    \end{itemize}
\end{itemize}
\hrule`,
  },
  {
    id: "33",
    title: "X-ray Hyper Spectral Imaging(HSI)? X-Ray Generation?",
    content: String.raw`\subsection*{X-ray Hyper Spectral Imaging(HSI)? X-Ray Generation?}
Bremsstrahlung gives raw continuum. HSI comes from how well we can resolve/bin independent energy channels. Needs 10s-100s.
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6849.jpg} 
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6850.jpg} 
    \end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "34",
    title: "Why/How to optimize e- beam?",
    content: String.raw`\subsection*{Why/How to optimize $e^-$ beam?}
WHY?
\begin{enumerate}
    \item Spectral shape, usable range
    \begin{itemize}
        \item Might need more flux in 1 band.
        \item Choosing $e^-$ energy and target properties is key.
    \end{itemize}
    \item Stability, Reproducibility.
    \begin{itemize}
        \item HSI needs consistent spectra over time.
        \item If $e^-$ beam energy, pointing, etc., jitters $\rightarrow$ spectrum changes and analysis gets difficult.
    \end{itemize}
    \item Conversion efficiency and brightness.
    \begin{itemize}
        \item Good SNR.
    \end{itemize}
\end{enumerate}
HOW?
\begin{itemize}
    \item Optics design \& tuning.
    \item Laser-plasma parameters control.
    \item Numerical optimization and algorithms.
    \item Target geometry optimization.
\end{itemize}
\hrule`,
  },
  {
    id: "35",
    title: "Separating Broadband X-ray Spectrum?",
    content: String.raw`\subsection*{Separating Broadband X-ray Spectrum?}
\begin{figure}[H]
    \centering
    \includegraphics[width=1\linewidth]{IMG_6851.jpg}
\end{figure}
\hrule`,
  },
  {
    id: "36",
    title: "TES?",
    content: String.raw`\subsection*{TES?}
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6852.jpg} 
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6853.jpg} 
    \end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "37",
    title: "Filters and K-edge?",
    content: String.raw`\subsection*{Filters and K-edge?}
\begin{figure}[H]
    \centering
        \includegraphics[width=\linewidth]{IMG_6852 2.jpg} 
\end{figure}
\hrule`,
  },
  {
    id: "38",
    title: "CXRO Database?",
    content: String.raw`\subsection*{CXRO Database?}
Global database where we can find info about interaction of X-rays with solids/gases and more. Find transmission plots of X-ray interactions.
\hrule`,
  },
  {
    id: "39",
    title: "Ross Pairs?",
    content: String.raw`\subsection*{Ross Pairs?}
eg: Zr(edge @18keV); Mo(edge @ 20keV)
\begin{itemize}
    \item Choose thickness for each such that both transmission curves are almost similar except edges.
    \item Subtract images.
    \item Most shared attenuation cancels out and we are left with photons dominant in 18-20keV range.
\end{itemize}
\begin{figure}[H]
    \centering
    \includegraphics[width=0.5\linewidth]{IMG_6855.jpg}
\end{figure}
\hrule`,
  },
  {
    id: "40",
    title: "HSI Data Cube, Image Processing?",
    content: String.raw`\subsection*{HSI Data Cuve, Image Processing?}
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6856.jpg} 
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6857.jpg} 
    \end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "41",
    title: "Spectral Unfolding?",
    content: String.raw`\subsection*{Spectral Unfolding?}
\begin{figure}[H]
    \centering
        \includegraphics[width=\linewidth]{IMG_6858.jpg} 
\end{figure}
\hrule`,
  },
  {
    id: "42",
    title: "Kramer's Law; Duane-Hunt Law?",
    content: String.raw`\subsection*{Kramer's Law; Duane-Hunt Law?}
\begin{figure}[H]
    \centering
        \includegraphics[width=\linewidth]{IMG_6859 2.jpg} 
\end{figure}
\hrule`,
  },
  {
    id: "43",
    title: "Far-Field Imaging?",
    content: String.raw`\subsection*{Far-Field Imaging?}
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6859.jpg} 
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6860 2.jpg} 
    \end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "44",
    title: "Diffraction Limit?",
    content: String.raw`\subsection*{Diffraction Limit?}
\begin{figure}[H]
    \centering
        \includegraphics[width=\linewidth]{IMG_6860.jpg}
\end{figure}
\hrule`,
  },
  {
    id: "45",
    title: "Iterative Reconstruction?",
    content: String.raw`\subsection*{Iterative Reconstruction?}
\begin{figure}[H]
    \centering
    \includegraphics[width=0.5\linewidth]{IMG_6863.jpg}
\end{figure}
\hrule`,
  },
  {
    id: "46",
    title: "NNLS Reconstruction?",
    content: String.raw`\subsection*{NNLS Reconstruction?}
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6864.jpg} 
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6865.jpg} 
    \end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "47",
    title: "EM Algorithm?",
    content: String.raw`\subsection*{EM Algorithm?}
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6866.jpg} 
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{IMG_6867.jpg} 
    \end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "48",
    title: "HSI Paper?",
    content: String.raw`\subsection*{HSI Paper?}
\href{https://www.overleaf.com/project/6a5748eb7dc5fdb392f67fa3}{Overleaf}
\hrule`,
  },
  {
    id: "49",
    title: "Detectors?",
    content: String.raw`\subsection*{Detectors?}
Types - 
\begin{enumerate}
    \item CCD(Charge-Coupled Device) Camera
    \begin{itemize}
        \item Array of SC(mostly Si) pixels. Each pixel in a row captures a photon.
        \item Photons are passed down below to subsequent row until the last row. Where all photons from each column are taken out and converted to voltage.
        \item Voltage is amplified before digitization.
    \end{itemize}
    \item CMOS(Complementary Metal Oxide SemiConductor) Camera
    \begin{itemize}
        \item Similar to CCD. But each pixel has it's own voltage converter.
        \item Converted voltage is passed down among rows and taken out for amplification followed by digitization.
        \item Better because it immediately converts to voltage reducing noise, etc.,
    \end{itemize}
    \item SC Single-photon Count Detector
    \begin{itemize}
        \item SPCD is an ultra-sensitive device that detects and records individual photons, not intensity by PE. It eliminates electronic noise, drastically improving both sensitivity and resolution.
    \end{itemize}
    \item Scintillator-based Detector
    \begin{itemize}
        \item A scintillation detector measures ionizing radiation. When radiation(such as gamma rays, alpha/beta particles, or neutrons) hits a scintillating material, the material absorbs the energy and emits tiny flashes of light. A sensitive photodetector then converts these flashes into measurable electrical pulses.
    \end{itemize}
    \item CZT SC Device
    \begin{itemize}
        \item CZT(Cadmium Zinc Telluride) is a compound SC-alloy used primarily as a room-temp radiation detector for X-rays and gamma rays. It works by directly converting incoming photons into electrical signals, providing ultra-high energy resolution without the need for expensive cryogenic cooling.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "50",
    title: "Why X-ray spectrum diagnosis?",
    content: String.raw`\subsection*{Why X-ray spectrum diagnosis?}
From X-ray spectrum, we can indirectly measure the following and perform LPP(laser produced plasma) diagnosis. 
\begin{itemize}
    \item Hot $e^-$ temp/energy distribution.
    \item Laser $\rightarrow$ X-ray conversion efficiency.
    \item How laser intensity, pulse profile, droplet/target geometry, etc., affect $e^-$ temp.
\end{itemize}
\hrule`,
  },
  {
    id: "51",
    title: "Convergence Graphs?",
    content: String.raw`\subsection*{Convergence Graphs?}
A convergence graph is a visualization that tracks how an algorithm or simulation approaches an optimal solution or steady state.. Typically plotting iterations or computational steps on the X-axis against an error margin or target metric on the Y-axis, it flattens out as the process approaches stability.
\hrule`,
  },
  {
    id: "52",
    title: "Discrepancy Principle?",
    content: String.raw`\subsection*{Discrepancy Principle?}
Discrepancy Principle(often associated with Morozov's principle) is a mathematical method in inverse problems and stats for choosing a regularization parameter. It dictates that a regularization parameter should be selected so the residual norm of the regularized solution equals the noise level of the data.
\hrule`,
  },
  {
    id: "53",
    title: "Current phase?",
    content: String.raw`\subsection*{Current phase?}
When we talk about phase in electrical current, we are talking about timing. Specifically, it describes where a cyclic AC wave is in its cycle at any given moment relative to a fixed reference point or another wave.
\begin{itemize}
    \item Regarding electrical grids and laboratory equipment. They refer to how many AC currents are traveling down the wires simultaneously.
    \item Single phase - A single AC current wave travels down the line. The power drops to zero twice every cycle (100 or 120 times a second depending on grid frequency). This is standard for household wall outlets.
    \item The system uses three separate wires, each carrying an AC current wave. Crucially, these three waves are intentionally staggered out-of-phase by exactly $120^\circ$ relative to each other.
\end{itemize}
\hrule`,
  },
  {
    id: "54",
    title: "Jitters?",
    content: String.raw`\subsection*{Jitters?}
Refers to shot-to-shot variations/fluctuations/instabilities in some laser parameter or interaction instead of single steady value.
\begin{enumerate}
    \item Pointing Jitter:
    \begin{itemize}
        \item Small random fluctuations in the direction/position of the laser beam on target, shot-to-shot. 
        \item Since LPI(especially at high intensity, tightly focused beams) are extremely sensitive to exactly where the focal spot lands relative to the target, pointing jitter can significantly change results like electron energy spectra or X-ray yield between otherwise identical shots.
    \end{itemize}
    \item Timing Jitter
    \begin{itemize}
        \item Random variations in the arrival time of one pulse relative to another(pump pulse vs probe pulse, main pulse vs pre-pulse). 
        \item This matters a lot in pump-probe experiments, where the physics you're measuring depends on a precise, known time delay. Timing jitter blurs that delay and degrades temporal resolution.
    \end{itemize}
    \item Energy/Intensity Jitter
    \begin{itemize}
        \item Fluctuations in the laser pulse energy or peak intensity from shot-to-shot, often due to instabilities in the laser amplification chain. 
        \item Since LPI are often highly nonlinear(threshold-like behavior), even a few percent intensity jitter can cause large variation in outputs like proton/$e^-$ energies, X-ray yield, or harmonic generation efficiency.
    \end{itemize}
    \item Pulse Duration Contrast Jitter
    \begin{itemize}
        \item Variation in how the pulse is temporally compressed, or in the contrast(ratio of main pulse intensity to any pre-pulse or pedestal). 
        \item This affects how the target's surface is pre-ionized before the main pulse arrives, which strongly influences the interaction physics.
    \end{itemize}
    \item Phase Jitter
    \begin{itemize}
        \item For few-cycle pulses, jitter in the carrier-envelope phase(CEP) shot-to-shot can affect processes sensitive to the exact electric field waveform, like attosecond pulse generation.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "55",
    title: "Clean rooms?",
    content: String.raw`\subsection*{Clean rooms?}
A clean room is a strictly controlled environment engineered to maintain extremely low levels of airborne particulates like dust, microbes, and chemical vapors. Cleanliness is measured by the number of particles of a specified size per unit volume of air.
\begin{itemize}
    \item High-Efficiency Air Filtration: Air continuously passes through HEPA filters(trapping $99.97\%$ of particles down to $0.3\mu m$) or ULPA filters($99.999\%$ efficiency down to $0.12\mu m$).
    \item Air Pressure Control: Positive Pressure - Used in most cleanrooms so air flows outward when doors open, preventing dirty outside air from rushing in. Negative Pressure - Used when working with hazardous materials (e.g., toxic gases, pathogens) to ensure contaminants cannot escape into surrounding spaces.
    \item Environmental Regulation: Temperature, humidity, static charge, and vibration are tightly regulated.
\end{itemize}
\hrule`,
  },
  {
    id: "56",
    title: "Cleanroom classification?",
    content: String.raw`\subsection*{Cleanroom classification?}
Cleanrooms are classified by the concentration of airborne particles permitted in the room. The global standard is ISO 14644-1.
\begin{itemize}
    \item Class - Max particles($\geq 0.5\mu m$ per $m^3$ - applications.
    \item ISO 1-2 - $< 35$ - Nanotech, photolithography.
    \item ISO 3-4(Class 1-10) - 35-352 - SC wafer fabrication.
    \item ISO 5(Class 100) - 3,520 - Laser optics assembly.
    \item ISO 6-7(Class 1000-10,000) - 35,200-352,000 - Medical device manufacturing, aerospace.
    \item ISO 8(Class 100,000) - 3,520,000 - Food packaging.
\end{itemize}
\hrule`,
  },
  {
    id: "57",
    title: "Cleanrooms according to airflow dynamics?",
    content: String.raw`\subsection*{Cleanrooms according to airflow dynamics?}
\begin{enumerate}
    \item Laminar Flow - Unidirectional
    \begin{itemize}
        \item Air flows in a uniform, parallel direction(either vertically or horizontally) at a constant speed($0.3–0.5\ m/s$).
        \item How it works: The piston-like stream sweeps particles straight out through floor/wall exhaust grates without turbulence.
        \item Use case: Required for ultra-clean environments(ISO 1-5).
    \end{itemize}
    \item Turbulent Flow - Non Unidirectional
    \begin{itemize}
        \item Air enters through ceiling filters and mixes turbulence-style throughout the room, diluting contaminants before being pulled out through return vents.
        \item How it works: Relies on continuous dilution rather than sweeping particles away directly.
        \item Use case: Standard for moderately clean spaces (ISO 6-8).
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "58",
    title: "Beam hardening?",
    content: String.raw`\subsection*{Beam hardening?}
Beam Hardening is the phenomenon where an X-ray beam's average energy increases/hardens as it passes through a material.
\begin{itemize}
    \item Materials tend to absorb low-energy/soft X-rays much more easily than high-energy/hard X-rays by means of photoelectric absorption.
    \item When a continuous polychromatic X-ray beam enters an object, the material acts as a natural filter, preferentially eating up the soft X-rays in the first few millimeters.
    \item The hard X-rays pass through with much less attenuation. Resulting beam that emerges on the other side has lost its low-energy component. Its average energy is higher than when it entered.
\end{itemize}
\hrule`,
  },
  {
    id: "59",
    title: "Spectral Reconstruction?",
    content: String.raw`\subsection*{Spectral Reconstruction?}
Spectral Reconstruction/Unfolding/Recovery is the process of mathematically recovering the original, unattenuated energy spectrum of the X-ray source from a series of indirect measurements. Since standard detectors integrate all incoming energies into a single output signal(count, intensity, ...), you lose the energy-resolved information.
\newline\linebreak
How?
\begin{itemize}
    \item Filtering the Beam: Pass the beam through an array of different metallic filters(Al/Cu/Mo/...) of varying thicknesses. Each filter hardens and attenuates the beam differently based on its known attenuation profile $T_i(E)$.
    \item Measuring the Output: A detector behind each filter records a single integrated count $M_i$:
    $$M_i = \int S(E) \cdot T_i(E) \cdot R(E) \, dE$$
    \item Solving the Inverse Problem: Using discrete energy bins, this turns into a matrix system:
    $$M\ = T\ .\ S$$
    \item Unfolding/Iterative Algorithms: Because direct matrix inversion explodes due to noise and ill-nature(under-determined problem), iterative algorithms—like Expectation-Maximization(EM), Genetic Algorithms, or Tikhonov Regularization—guess and refine $S(E)$ until the predicted measurements match the real experimental values $M_i$.
\end{itemize}
\hrule`,
  },
  {
    id: "60",
    title: "Poisson Stats?",
    content: String.raw`\subsection*{Poisson Stats?}
A Poisson distribution is a discrete probability model that calculates the likelihood of a given number of events(k) occurring in a fixed interval of time or space, assuming the events happen independently and at a constant average rate($\lambda$).
\begin{enumerate}
    \item Simple Poisson
    \begin{itemize}
        \item Distribution models the number of independent events occurring within a fixed interval of time or space, given a constant average rate of occurrence.
        \item Rules - events happen independently, average rate($\lambda$) is constant, 2 events cannot happen at the exact same fraction of a second.
        \item EG: Photon Counting -  If LPP X-ray source emits an average of $\lambda = 100$ photons per ps into a pixel on a detector, a Simple Poisson distribution tells you the probability of that pixel catching exactly 95, 100, 110 individual photons on a given shot. Each event is a single count($+1$).
    \end{itemize}
    \item Compound Poisson
    \begin{itemize}
        \item Distribution when the number of events follows a Simple Poisson distribution, but each individual event carries a random weight, size, or value instead of just counting as "$+1$".
        \item Instead of just counting how many times the doorbell rings, you are measuring the total weight of the packages delivered.
        \item EG: Scintillator Screen(LANEX) Signal - When an $e^-$ beam hits a LANEX screen, the number of electrons hitting the screen($N$) follows a Simple Poisson distribution. But each individual $e^-$ has a different energy and generates a random number of green photons($Y$) upon impact. One electron might create 500 photons, the next might create 420, and another might create 600.The total brightness registered by your CCD camera($X$) is a Compound Poisson variable. It convolves the randomness of how many $e^-$ hit the screen with the randomness of how much light each $e^-$ generated.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "61",
    title: "Dipole?",
    content: String.raw`\subsection*{Dipole?}
System of 2 equal and opposite charges/poles/forces.
\begin{enumerate}
    \item Magnetic Dipoles
    \begin{itemize}
        \item Used in ESM to bend trajectory of $e^-$
        \item 2 opposing magnetic poles generate uniform B. Moving charged particles experience Lorentz force($F=q\text{v}\  \times \ B$) and bend accordingly.
        \item Because lower-energy $e^-$ bend more sharply than higher-energy $e^-$, a dipole acts as an energy separator fanning out a mixed $e^-$ beam into a spectrum.
    \end{itemize}
    \item Electric Dipoles
    \begin{itemize}
        \item 2 equal and opposite charges separated by distance d.
        \item Dipole Moment - measured as $p=q.d$, pointing from negative to positive charge.
        \item When placed in an external electric field, an electric dipole experiences a torque ($\tau = p \times E$) that tries to align the dipole with the field lines.
    \end{itemize}
    \item Molecular/Chemical Dipole
    \begin{itemize}
        \item Occurs when $e^-$ density is shared unequally across a chemical bond(due to differences in electro-negativity).
        \item Water - $O_2$ pulls $e^-$ density away from $H_2$, creating a partial negative charge($\delta^-$) near the $O_2$ atom and partial positive charges($\delta^+$) near the $H_2$. 
        \item This permanent dipole moment gives water its high surface tension, solvent capabilities, and dielectric constant.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "62",
    title: "Electron Temp?",
    content: String.raw`\subsection*{Electron Temp?}
Measure of average KE of free $e^-$ in plasma or system of charged particles.
\begin{itemize}
    \item Because $e^-$ have an extremely tiny mass compared to atomic nuclei($m_e \ll m_n$), they move faster and respond much quicker to external forces(E or high-intensity lasers). As a result, $e^-$ quickly reach a thermal equilibrium among themselves, defining their own distinct energy distribution characterized by $T_e$.
    \item In plasma physics and high-intensity physics, $T_e$ is expressed in ev or keV:
    $$1eV \approx 11,600K$$
\end{itemize}
\hrule`,
  },
  {
    id: "63",
    title: "Significance of electron temp.?",
    content: String.raw`\subsection*{Significance of electron temp.?}
Governs behavior, transport and radiation of plasma.
\begin{itemize}
    \item Dictates plasma conductivity - Spitzer conductivity.
    \begin{itemize}
        \item In a fully ionized plasma, higher $T_e$ means $e^-$ move faster, reducing their effective Coulomb collision cross-section with heavy ions. 
        \item Consequently, the plasma's electrical resistivity($\rho$) drops, and its electrical conductivity($\sigma$) scales rapidly with $T_e$:  $$\sigma \propto T_e^{3/2}$$
        \item As a result, hot plasmas become extraordinarily good conductors(often exceeding the conductivity of solid Cu).
    \end{itemize}
    \item Controls radiation O/P and X-ray generation.
    \begin{itemize}
        \item $T_e$ directly influences energy of emitted photons.
        \item Bremsstrahlung - Fast $e^-$ decelerating near ions emit a continuous spectrum up to a maximum photon energy scaling with $T_e$.
        \item Atomic Transitions(Line Radiation) - $T_e$ governs the ionization state of the plasma ions. Higher $T_e$ strips bound $e^-$, opening up hard X-ray emission lines(K-shell, L-shell transitions).
    \end{itemize}
    \item Governs kinetic and plasma waves.
    \begin{itemize}
        \item Plasma wave dynamics depend heavily on $T_e$.
        \item Ion Acoustic Sound Speed($c_s$) - Speed of sound waves in a plasma is set almost entirely by hot $e^-$ temp, as $e^-$ supply the pressure force while heavy ions supply the inertia:
        $$c_s \approx \sqrt{\frac{Z k_B T_e}{m_i}}$$
        \item Debye Length($\lambda_D$) - The distance over which a plasma shields electric fields expands with higher $T_e$:
        $$\lambda_D = \sqrt{\frac{\varepsilon_0 k_B T_e}{n_e e^2}}$$
    \end{itemize}
    \item Multi temp/Non-equilibrium states
    \begin{itemize}
        \item Because energy exchange between light $e^-$ and heavy ions is inefficient($m_e \ll m_n$), plasmas are frequently in a non-LTE(Local Thermal Equilibrium) state.
        \item Warm Dense Matter/Low-Pressure Plasmas: $T_e \gg T_n$(eg: $T_e = 30,000K$ while ions remain at room temperature).
        \item Hot Electron Tail($T_{hot}$) - In LPI(LPP/LWFA), laser acceleration mechanisms produce a 2-temp $e^-$ distribution - a bulk thermal temperature($T_{cold}$) and a high-energy kinetic tail($T_{hot}$).
    \end{itemize}
\end{itemize}
\hrule`,
  },
  {
    id: "64",
    title: "Plasma Density - n_e?",
    content: String.raw`\subsection*{Plasma Density - $n_e$?}
Concentration of free $e^-$ per unit volume, measured in $cm_3$.
\begin{itemize}
    \item The $e^-$ density determines the plasma frequency($\omega_p$) - natural oscillation frequency of the electron cloud:
    $$\omega_p = \sqrt{\frac{n_e e^2}{\varepsilon_0 m_e}}$$
    \item Critical Density($n_c$) - Density at which the plasma frequency equals the laser frequency($\omega_p = \omega_L$).
    \item If $n_e > n_c$(Overdense) - plasma acts like a mirror and reflects the laser.
    \item If $n_e < n_c$(Underdense) - laser can propagate through the plasma.
    \item Acceleration Gradients - In LWFA, the maximum accelerating electric field scales as $E_z \propto \sqrt{n_e}$. Higher density yields stronger accelerating fields, but reduces the distance over which the acceleration can be sustained.
\end{itemize}
\hrule`,
  },
  {
    id: "65",
    title: "Plasma Gradient - grad n_e?",
    content: String.raw`\subsection*{Plasma Gradient - $\nabla n_e$?}
Describes how sharply/smoothly density changes in space. Rarely uniform. Transitions from 0(vacuum) to a peak density over a certain distance. 
\begin{itemize}
    \item Characterized by density scale length - $L_s$:
    $$L_s = \left\vert{} \frac{n_e}{\frac{dn_e}{dx}} \right\vert{}$$\
    \item Sharp gradient($L_s \ll \lambda_L$) - steep jump in density. Useful for downramp injection in LWFA - sharp drop slows down plasma wave phase velocity and traps $e^-$ in wakefield.
    \item Gradual gradient($L_s \gg \lambda_L$) - smooth, extended slope. In LPP/X-ray generation, long pre-plasma gradient alters laser absorption.
\end{itemize}
\hrule`,
  },
  {
    id: "66",
    title: "Plasma Length - L_p?",
    content: String.raw`\subsection*{Plasma Length - $L_p$?}
Physical extent over which laser interacts with the plasma medium.
\begin{itemize}
    \item Dephasing length($L_d$) - as accelerated $e^-$ gain energy, they travel faster than laser-driven plasma wave. Eventually $e^-$ slip into decelerating phase of plasma wave. $L_p$ should match $L_d$ to maximize energy gain without decelerating the beam.
    \item Laser depletion length($L_{pd}$) - distance over which laser pulse loses all its energy to plasma wave.
\end{itemize}
\hrule`,
  },
  {
    id: "67",
    title: "Electric motors?",
    content: String.raw`\subsection*{Electric motors?}
EM device that converts electrical energy into mechanical energy, usually rotation. Operate based on Lorentz force or EMI - When a current passes through a conductor(wire coils) placed inside a magnetic field, it experiences a magnetic force:
$$F=I(L\times B)$$
By arranging coils on a rotating shaft(rotor) inside a stationary electromagnet(stator), this forces creates torque.
\begin{enumerate}
    \item DC Motor
    \begin{itemize}
        \item Consists of a stationary magnetic field(stator) and rotating armature coil(rotor).
        \item To keep the motor spinning in one continuous direction, direction of current through rotor coils must flip every half-turn. Done mechanically using split-ring commutator and conductive carbon brushes.
        \item Simple to control, speed $\propto$ applied voltage, torque $\propto$ current. Electrical noise, mechanical friction because of brushes.
    \end{itemize}
    \item AC Motor
    \begin{itemize}
        \item Instead of relying on mechanical commutator to switch polarities, uses natural wave cycle of AC.
        \item AC current through stator coils generates a rotating magnetic field(RMF) that continuously drags rotor along.
        \item Reliable, low maintenance, capable of massive loads. Speed is tied to grid freq.
    \end{itemize}
    \item Stepper Motor
    \begin{itemize}
        \item Special types of brushless DC motor that divides full 360$\circ$ rotation into large number of equal, discrete angular steps. Usually 1.8$\circ$ per step = 200 steps per rev).
        \item Rotor consists of permanent magnet. Stator contains multiple EM coils in phases. By energizing these coils in a precise, digital sequence(using drivers like A4988), rotor snaps to align the active magnetic pole one micro-step ata time.
        \item Great open-loop position control, high holding torque when stopped. Consumes current continuously even in holding position, can lead to overload.
    \end{itemize}
    \item Servo Motor
    \begin{itemize}
        \item Closed-loop system combining a motor(DC/BLDC/AC), high-res position feedback sensor(encoder/potentiometer) and control unit.
        \item Doesn't move blind. Constantly receives target position command(via PWM/digital comm.). It measure actual current position via encoder, calculates error and uses PID loop to drive motor precisely.
        \item High acceleration, dynamic torque adjusting, very precise. Complex control electronics, requires PID tuning.
    \end{itemize}
    \item Induction Motor
    \begin{itemize}
        \item Subclass of AC motor. It is asynchronous because rotor turns slighly slower than speed of stator's rotating magnetic field.
        \item No electrical connection is made directly to rotor.
        \item AC energizes stator, creates RMF. As field sweeps across stationary conductive bars of rotor, it induces electric currect via Faraday's Law. Induced rotor current generates its own magnetic field causing rotation.
        \item Rugged, inexpensive, maintenance-free. Draws high starting current, speed varies due to slip.
        \item Slip - Difference in speed between RMF($\omega_s$) and physical rotor($\omega_r$)
        $$Slip = \frac{\omega_s-\omega_r}{\omega_s}$$
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "68",
    title: "Faraday's Law of Induction",
    content: String.raw`\subsection*{Faraday's Law of Induction}
Change in the magnetic environment of a coil of wire will induce a voltage(EMF) in the coil. The magnitude of this induced EMF is directly proportional to the rate at which the magnetic flux changes.
$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$
where: $\mathcal{E}$ - EMF, V; N - number of turns in wire coil; $\Phi_B$ - Magnetic flux; $\frac{d\Phi_B}{dt}$ - rate of change of magnetic flux wrt time.
$$\Phi_B = \int \int B.dA = BAcos(\theta)$$
B - Magnetic field strength; A - loop area; $\theta$ - angle between field lines and surface normal.
\hrule`,
  },
  {
    id: "69",
    title: "PID?",
    content: String.raw`\subsection*{PID?}
Proportional-Integral-Derivative controller is common closed-loop feedback mechanism. Continuously calculates error value $\rightarrow$ difference between target(Setpoint: SP) and a measured variable(Process Variable: PV) and applies correction based on PID terms.
\newline\linebreak
Controlled calculates total output adjustment by summing 3 distinct operations on current error($e(t)$):
$$u(t) = K_pe(t)\ +\ K_i\int_0^te(\tau)d\tau \ +\ K_d\frac{de(t)}{dt}$$
\begin{enumerate}
    \item Proportional - present error
    \begin{itemize}
        \item P term($K_p$) drives the system based on how far away it currently is from target.
        \item If error is large, correction is large.
        \item P alone faces steady state error(offset) - Error and correction shrinks as we get close to the target, eventually correction matches natural system losses(friction/gravity/...) and systems falls just short of target.
    \end{itemize}
    \item Integral - accumulation of past error
    \begin{itemize}
        \item I term($K_i$) looks at history. Accumulates remaining error over time.
        \item Even if small error persists, integral terms continues to grow forcing the system to eliminate final steady state offset.
        \item Can cause overshoot \& windup if $K_i$ is too high, because accumulated history forces system past target before it realizes to slow down.
    \end{itemize}
    \item Derivative - predication of future error
    \begin{itemize}
        \item D term($K_d$) calculates slope or rate of change of error. Acts as damper/brake, predicting where system is heading and slowing down the output if system is approaching target too quickly.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "70",
    title: "Oscilloscope?",
    content: String.raw`\subsection*{Oscilloscope?}
\begin{itemize}
    \item Device that displays electrical signals as 2d graphs of voltage-vs-time.
    \item Y axis - displays amp, $V_{PP}$, $V_{rms}$, DC offset vertically.
    \item X axis - displays time, allowing measurement of freq, signal period(T), pulse width, rise/fall times.
    \item Z axis - displays shape and stability of signal, showing whether it is sine/square/ramp/complex pulse train.
\end{itemize}
\hrule`,
  },
  {
    id: "71",
    title: "Fabry-Perot Cavity/Interferometer?",
    content: String.raw`\subsection*{Fabry-Perot Cavity/Interferometer?}
Optical structure consisting of 2 highly reflective, flat mirrors facing each other, separated by a fixed distance $d$. Serves as a resonant cavity for light waves, passing specific target wavelengths via constructive interference while blocking all others. 
\begin{itemize}
    \item Working - Multiple beam interference:
    \begin{itemize}
        \item When a broad light beam hits the first mirror, a small portion enters the cavity. This light bounces back and forth between the 2 highly reflective surfaces. Every time the light hits a mirror boundary, a tiny fraction escapes. The light waves escaping on the transmission side will overlap and interfere with each other.
        \item Constructive Interference(Resonance) - If the round trip distance inside the cavity($2d$) is an integer multiple of the light’s wavelength($\lambda$), the waves bouncing back and forth line up perfectly and interfere constructively. The cavity becomes highly transparent, transmitting up to 100\% of the incident light. The resonance condition for normal incidence is:
        $$2d = m\lambda \quad \implies \quad \nu_m = m \frac{c}{2nd}$$
        where: $m$ - mode number(integer); $n$ - refractive index of the medium in cavity; $\nu_m$ - allowed resonant frequencies.
        \item Destructive Interference(Reflection) - If the wavelength does not satisfy this condition, the internal reflections fall out of phase, interfering destructively. The cavity acts like a highly efficient mirror, reflecting nearly all the incident light back toward the source.
    \end{itemize}
    \item Key parameters - sharp transmission spikes of Fabry-Perot cavity are characterized by:
    \begin{enumerate}
        \item Free Spectral Range(FSR) - Distance(freq/wavelength) between 2 adjacent transmission peaks.
        $$\Delta \nu_{FSR} = \frac{c}{2nd}$$
        \item Finesse - Measure of cavity's quality, determined by reflectivity(R) of mirrors. High R traps photons longer, narrowing the transmission spikes.
        $$\mathcal{F} = \frac{\pi \sqrt{R}}{1-R}$$
        \item Linewidth/Resolving Power($\delta \nu$) - FWHM of a transmission peak is directly related to FSR and Finesse. High Finesse creates narrow spectral lines, allowing to distinguish close freq.
        $$\delta \nu = \frac{\Delta \nu_{FSR}}{\mathcal{F}}$$
    \end{enumerate}
\end{itemize}
\hrule`,
  },
  {
    id: "72",
    title: "Applications of Fabry-Perot Cavity?",
    content: String.raw`\subsection*{Applications of Fabry-Perot Cavity?}
\begin{enumerate}
    \item Laser Cavity
    \begin{itemize}
        \item Provides feedback for st. emission.
        \item Cavity modes select exact lasing freq out of broad gain medium bandwidth.
    \end{itemize}
    \item Optical Spectrum Analyzers(OSA)
    \begin{itemize}
        \item By changing $d$ using a piezoelectric actuator, can sweep resonant transmission peaks across a range of wavelengths to profile unknown laser spectrum.
    \end{itemize}
    \item Dichroic/Interference Filters
    \begin{itemize}
        \item Miniature solid state Fabry-Perot layers are coated directly on glass to construct bandpass filters that reject broad ambient light while letting specific target signal wavelengths pass.
    \end{itemize}
    \item LIGO Detectors
    \begin{itemize}
        \item Km long Fabry-Perot cavities are integrated into arms of giant Michelson Interferometers to bounce sensing laser back and forth. multiplying effective arm length \& increasing sensitivity to microscopic spacetime ripples
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "73",
    title: "Micro-controllers?",
    content: String.raw`\subsection*{Micro-controllers?}
Compact IC designed to govern a specific operation in an embedded system. Packs RAM, storage, graphics, etc., fabricated onto a single Si chip. Core components inside a MCU:
\begin{itemize}
    \item CPU - Typically low power, speeds 8MHz-100sMHz.
    \item RAM - Volatile memory to store temporary runtime variables. Usually kB.
    \item ROM(Flash memory) - Non-volatile storage for permanent code.
    \item Peripherals(I/P, O/P) - GPIO, ADC/DAC/ I$^2$C, ....
\end{itemize}
\hrule`,
  },
  {
    id: "74",
    title: "Arduino?",
    content: String.raw`\subsection*{Arduino?}
Not a single MCU. Open-source ecosystem consisting of - 
\begin{itemize}
    \item Hardware(Dev. boards like UNO/NANO/...) - Boards are designed that place MCU chips onto PCB with a USB port for programming, voltage regulators for safety, external crystal oscillator for timing and female pin heads for prototyping.
    \item Software(Arduino IDE) - Cross-platform application to write/compile/upload code.
    \item Programming Language/Framework - Uses C/C++ library.
\end{itemize}
UNO runs on an ATmega328P - 8-bit MCU made by Microchip; features 32kB ROM, 2kB RAM, runs at 16MHz. No wireless capabilities.
\hrule`,
  },
  {
    id: "75",
    title: "ESP32?",
    content: String.raw`\subsection*{ESP32?}
Powerful, low cost MCU designed by Espressif Systems engineered for IoT market.
\begin{itemize}
    \item Native wireless connectivity - features integrated WiFi and Bluetooth hardware on the chip. Easy to build internet-connected web servers, smart home devices, etc.,
    \item Dual core architecture - Most ESP32 vaariations have a 32-bit Xtensa dual-core processor running up to 240MHz.
    \item Memory - Packs 520kB internal sRAM and supports MBs of ROM. Handles computational physics tasks, encryption protocols, graphic display rendering, etc.,
\end{itemize}
\hrule`,
  },
  {
    id: "76",
    title: "Thermal lensing?",
    content: String.raw`\subsection*{Thermal lensing?}
Optical distortion effect that occurs when a high power laser passes through a medium that absorbs even a small part of the laser's energy. Absorbed energy heats the material, creating a localized spatial temperature gradient and as refractive index changes with temp, this spatial profile turns the medium into a self-induced optical lens.
\begin{itemize}
    \item Mechanism:
    \begin{itemize}
        \item High intensity laser with non-uniform transverse intensity profile travels through an optical component(mirror substrate, gas,...)
        \item Center of beam(highest intensity) heats up the center of the component, edges are cooler. Thus, temp gradient.
        \item Refractive index becomes higher at the center($n_{center}>n_{edge}$).
        \item Light speed changes - travels slowly in high refractive index. Central hot region retards the wavefront more than edges, curving the flat wavefront inward like a focusing(+ve) biconvex lens.
    \end{itemize}
    \item Thermo-Optic Coefficient: magnitude and sign of thermal lens depends on thermo-optic coefficient.
    \begin{itemize}
        \item Positive focal length(Focusing lens) - common in solid state lasers and optical glasses.
        $$\frac{dn}{dT}>0$$
        \item Negative focal length(Defocusing lens) - found in liquids, polymers and fluoride glasses.
        $$\frac{dn}{dT}<0$$
    \end{itemize}
    \item Thermal lens focal length:
    $$f_T \approx \frac{2\pi K\omega^2_p}{P_{abs}(\frac{dn}{dT})}$$
    where: K - thermal conductivity of material; $\omega_p$ - laser beam radius; $P_{abs}$ - absorbed optical power.
\end{itemize}
\hrule`,
  },
  {
    id: "77",
    title: "Wakefield Injection?",
    content: String.raw`\subsection*{Wakefield Injection?}
Injection of $e^-$ inside the bubble is crucial for acceleration. This is accomplished one of the below injections methods -
\begin{itemize}
    \item Self-Injection : Plasma wave gets so strong that it breaks and $e^-$ fall in naturally.
    \item Ionization Injection : Uses a gaseous mixture(eg: H$e^-$Ne). Laser ionizes inner shell $e^-$ which start in the right spot.
    \item Colliding Pulse Injection : A 2nd weaker laser pulse collides with the main pulse disturbing the plasma wave and letting $e^-$ in.
    \item Density Down Ramp Injection : Plasma density is suddenly lowered for an instant so that wave slows down and $e^-$ enter the bubble.
\end{itemize} 
\hrule`,
  },
  {
    id: "78",
    title: "Vacuum, properties, conversion, units, applications?",
    content: String.raw`\subsection*{Vacuum, properties, conversion, units, applications?}
Absence of matter where gaseous pressure is significantly lower than atm pressure(1.01325 bar). Impossible to achieve perfect vacuum.
\begin{enumerate}
    \item Units
    \begin{itemize}
        \item 1 mbar = 100 Pa = 0.75 Torr
        \item 1 Torr = 133.322 Pa = 1.33322 mbar
        \item 1 atm = 101.325kPa = 760 Torr = 1013.25 mbar
    \end{itemize}
    \item Vacuum quality regimes
    \begin{itemize}
        \item Rough/low vacuum(RV: 1013-1mbar) - viscous flow(molecules collide constantly). Applications in vacuum packaging, suction cups.
        \item Medium vacuum(MV: 1-$10^{-3}$mbar) - trasistion flow(collisions shift b/w molecules and walls). Applications in industrial freeze-drying, neaon signs.
        \item High vacuum(HV: $10^{-3}-10^{-7})$mbar) - molecular flow(mean free path is longer than chamber, molecules hit chamber not each other). Applications in laser beamlines, electron microscopy.
        \item Ultra high vacuum(UHV: $10^{(-7)}-10^{(-12)}$mbar) - molecular flow(molecules spend days absorbed to walls before hitting another molecule). Applications in high intensity target chambers, particle accelerators.
    \end{itemize}
    \item Properties
    \begin{itemize}
        \item Mean free path($\lambda$) - average distance of a molecule before collision. $\lambda$ = 68nm at atm pressure; $\lambda$ = 68m at HV($10^{-6}$mbar.
        \item Monolayer formation time($\tau$) - time taken for completely clean surface to become covered by a single layer of gas molecules. Typically in UHV regimes. Monolayer forms in 1s at $10^{-6}$mbar, 3hrs at $10^{-10}$mbar.
        \item Breakdown voltage(Paschen's Law) - Vacuum alters electrical insulation. Voltage required to create an electrical arc b/w 2 electrodes depends linearly on pressure nad gap distance(d). At MV breakdown voltage drops to min, easy gas ionization creating plasma glow discharge; at HV/UHV breakdown voltage skyrockets because there are few molecules left to carry continuous current, effectively making it an insulator.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "79",
    title: "Beam line?",
    content: String.raw`\subsection*{Beam line?}
Refers to enclosed, transport system that guides, reshapes, cleans and directs high power pulses from main amplifier system to experimental target chamber. It is a structure designed to preserve pulse quality and target intensity as high intensity pulses can instantly ionize air, destroy standard optics or self-focus wildly.
\begin{itemize}
    \item Main tasks -
    \begin{itemize}
        \item Beam transport - guides beam using large precision-steering turning mirrors across lab(10-20m).
        \item Pulse compression - Takes chirped ns pulses from amplifier and compresses to fs using heavy vacuum compressors.
        \item Spatial \& temporal cleaning - Removes high freq noise, wavefront errors, pre-pulses using spatial filters, plasma mirrors and adaptive optics.
        \item Focusing - Concentrates pulse with microscopic precision using OAP to achieve relativistic intensities.
    \end{itemize}
    \item Vacuum pipes and chambers are usually made of heavy Al or SS. Comprise of large cylindrical pipes, gates valves, rectangular chambers sealed with viton or MO rings.
\end{itemize}
\hrule`,
  },
  {
    id: "80",
    title: "Beam line composition?",
    content: String.raw`\subsection*{Beam line composition?}
\begin{enumerate}
    \item Heavy Al or SS vacuum pipes and chambers - 
    \begin{itemize}
        \item Comprise of large cylindrical pipes, gates valves, rectangular chambers sealed with viton or MO rings.
        \item At high peak powers, light traveling through ambient air undergoes Self-Focusing (via the non-linear Kerr effect, $\chi^{(3)}$) and Spontaneous Raman Scattering, breaking the beam into chaotic filaments and ionizing the air into a spark that destroys the beam profile.
    \end{itemize}
    \item Specialized optics - 
    \begin{itemize}
        \item Comprise dielectric mirrors and OAP.
        \item Substrates made of ultra pure fused Si or glass-ceramics, coated with sub-micron layers of alternating high nad low refractive index dielectrics($Ti)_2, SiO_2, HfO^2$.
        \item Metal coated mirrors absorb too much energy and burn under high intensity. Multilayer dielectric reflect 99.9\% light through constructive interference.
        \item OAP are used instead of transmissive glasses to avoid chromatic dispersion.
    \end{itemize}
    \item Vacuum compressor gratings - 
    \begin{itemize}
        \item Au-coated or dielectric transmission/reflection diffraction gratings.
        \item Pulse is compressed to fs at end of line. Gratings must be large to spread the energy over a wide surface area so pulse intensity doesn't exceed optical damage limit.
    \end{itemize}
    \item Adaptive optics - 
    \begin{itemize}
        \item Thin, flexible, deformable mirrors backed by array of piezoelectric actuators that can push/pull mirror's surface by nm.
        \item Avoids wavefront distortions caused by thermal lensing in long beamlines. Dynamically correct aberrations when linked with wavefront sensor.
    \end{itemize}
    \item Vibration isolated optic tables
\end{enumerate}
\hrule`,
  },
  {
    id: "81",
    title: "Butter paper?",
    content: String.raw`\subsection*{Butter paper?}
Greaseproof paper or Silicone coated glassine used to pack optics because - 
\begin{itemize}
    \item Zero lint and fiber shedding.
    \item Scratch free, smooth surface.
    \item Acid free and chemically inert.
    \item Resistance to oil, fingerprints.
    \item Non-adhesive and static free.
\end{itemize}
\hrule`,
  },
  {
    id: "82",
    title: "Gimbal?",
    content: String.raw`\subsection*{Gimbal?}
Mechanical devices used to hold, align, manipulate optics(mirrors, beam splitters, filters, ...). Provide micro-radian rotational control needed to align accurately.
\begin{enumerate}
    \item Kinematic mirror mounts - 
    \begin{itemize}
        \item Provides rotation around vertical(Yaw/Azimuth) and horizontal(Pitch/Elevation) axes.
        \item Turning the top screws pushes faceplate against spring tilting mirror up/down. Turning side screws tilts left/right.
    \end{itemize}
    \item Gimbal mirror mounts - pure rotation - 
    \begin{itemize}
        \item Designed so that 2 rotation axes(pitch \& yaw) intersect at exact center of mirror's front reflective surface.
        \item Mirror rotates purely around it's central surface without moving back and forth in space(Z-axis translation = 0)
        \item Does not change optical path length.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "83",
    title: "Turbo molecular pumps?",
    content: String.raw`\subsection*{Turbo molecular pumps?}
Kinetic vacuum pump used to achieve high vacuum(HV) and ultra-high vacuum(UHV) levels. Does not trap/compress gas using sealed chambers like positive displacement pumps. Imparts momentum to gas molecules using high speed rotating blades, swatting them out of vacuum chamber.
\begin{itemize}
    \item Operate in molecular flow regime - mean free path of gas is significantly larger than space between pump blades. Gas molecules collide with pump walls and blades more than with themselves.
    \item Gas molecules enter inlet, collide with high speed rotor blade, gains momentum, moves to stator stage which redirects molecule into ideal angle to hit next rotor blade. Cascading stages impart steeper angles, compressing gas and pushing it towards exhaust.
\end{itemize}
\hrule`,
  },
  {
    id: "84",
    title: "R2D2?",
    content: String.raw`\subsection*{R2D2?}
Informal name for spherical/dome target chambers or diagnostic ports in high intensity laser labs. House the interaction region where high power laser strikes target under vacuum. Equipped with numerous radial ports for diagnostics(like optical spectrometers, time of flight detectors, cameras, etc.,)
\hrule`,
  },
  {
    id: "85",
    title: "Bellow and Flange?",
    content: String.raw`\subsection*{Bellow and Flange?}
Critical mechanical hardware used to connect vacuum chambers, beamlines, mount pumps and allow movement while maintaining leak-tight seal against atm. pressure. 
\begin{itemize}
    \item Bellows
    \begin{itemize}
        \item Flexible, corrugated cylindrical tube made of thin walled SS.
        \item Used for vibration isolation(absorbing jitter), thermal expansion(absorb structural stress), alignment correction.
        \item Types - Formed(hydroformed) and edge-welded bellows.
    \end{itemize}
    \item Flanges
    \begin{itemize}
        \item Mechanical ring at end of tube/chamber port that mates with another component.
        \item Types - Klein Flansch(KF)/quick flange, ISO(large) flange, ConFlat(CF) flange
        \begin{enumerate}
            \item KF Flange/NW(nominal width) quick release vacuum component: The smooth mating face with the green Viton(FKM) O-ring. The O-ring fits around an internal stainless steel centering ring, which keeps the rubber aligned and prevents it from being sucked inside when pumping down to vacuum.
            \begin{figure}[H]
                \centering
                \includegraphics[width=0.5\linewidth]{KF flange.jpeg}
            \end{figure}
        \end{enumerate}
    \end{itemize}
\end{itemize}
\hrule`,
  },
  {
    id: "86",
    title: "Compressor?",
    content: String.raw`\subsection*{Compressor?}
Essential in high intensity laser labs for CPA. Takes a temporarily stretched pulse and squeezes in time to deliver TW/PW power.
\begin{itemize}
    \item Why?
    \begin{itemize}
        \item Direct amp in laser crystal, peak power becomes destructive - optical damage, non-linear effects.
    \end{itemize}
    \item How?
    \begin{itemize}
        \item Stretched pulse strikes first diffraction grating, grating disperses colour at different angles.
        \item Longer wavelength(red) travels physically longer optical path through compressor than blue.
        \item By precisely adjusting distance between 2 gratings, delay introduced to red balances with blue.
        \item All spectral components exit 2nd grating aligned in phase recreating a ultra short pulse with massive peak power.
    \end{itemize}
    \item Types?
    \begin{itemize}
        \item Reflection grating compressors.
        \item Transmission compressors.
        \item Chirped mirror compressors.
    \end{itemize}
    \item Where?
    \begin{itemize}
        \item Found inside large vacuum chambers because to avoid air ionization, non-linear phase distortion(B-integral), grating damage.
    \end{itemize}
\end{itemize}
\hrule`,
  },
  {
    id: "87",
    title: "Chirped Pulse Amplification(CPA)?",
    content: String.raw`\subsection*{Chirped Pulse Amplification(CPA)?}
3 step process:
\begin{enumerate}
    \item Stretching(temporal dispersion) - 
    \begin{itemize}
        \item Low energy pulse passes through pulse stretcher(pair of diffraction gratings or prism arrangement).
        \item Introduces delay line according to wavelengths. Stretches pulse by a factor of up to 10000.
    \end{itemize}
    \item Amplification - 
    \begin{itemize}
        \item Long, low power, chirped pulse is routed into gain medium($Ti:Al_2O_3$ crystal).
        \item As energy is spread in time, pulse safely extracts energy from crystal growing to high energies.
    \end{itemize}
    \item Compression(negative dispersion) - 
    \begin{itemize}
        \item High energy, stretched pulse passes into pulse compressor inside vacuum chamber.
        \item Applies exact opposite dispersion - forces red to wait for blue.
        \item Spectral components re-align in phase packing all aquired enrgy into ultra short temporal window.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "88",
    title: "Polarimeter?",
    content: String.raw`\subsection*{Polarimeter?}
Used to measure angle of rotation caused by passing polarized light through optically active substance(solutions containing chiral molecules like sugars/amino acids/pharmaceuticals). Used to determine molecular structure, optical purity.
\hrule`,
  },
  {
    id: "89",
    title: "Gauge controller, magnets?",
    content: String.raw`\subsection*{Gauge controller, magnets?}
Control center for vacuum measurement system. Powers individual vacuum sensors(gauges), processes raw analog signals and displays pressure reading. High end controllers feature programmable relays to control safety interlocks. When dealing with deep vacuum(HV-UHV), standard mechanical/thermal gauges fail. Labs rely on ionization gauges that fundamentally use strong permanent magnets to function.
\hrule`,
  },
  {
    id: "90",
    title: "CR RF antennas to produce THz?",
    content: String.raw`\subsection*{CR RF antennas to produce THz?}
\hrule`,
  },
  {
    id: "91",
    title: "Perspex - Acrylic glass??",
    content: String.raw`\subsection*{Perspex - Acrylic glass??}
Common name for PMMA(Polymethyl Methacrylate) which is transparent, rigid thermoplastic. 
\begin{itemize}
    \item Optical clarity - has excellent transmission(up to 92\% visible light through standard sheet).
    \item Refractive index - stable($n \approx 1.49$), very close to borosilicate glass(1.5).
    \item Light weight, shatter proof - roughly half density of glass and has higher impact strength. At failure it cracks/breaks into large dull pieces rather than shattering into microscopic shards.
    \item Easy machinability - easy to make.
    \item Usually always used as secondary lab infra - protective laser shielding, diagnostic and component housing, fabrication of microfluidic chips
\end{itemize}
\hrule`,
  },
  {
    id: "92",
    title: "Interference",
    content: String.raw`\subsection*{Interference}
Physical phenomenon where 2/more overlapping EM waves superpose to form a resultant wave whose local amplitude depends on relative phase difference b/w constituents.
\newline
Because Maxwell’s equations in linear media are linear differential equations, electromagnetic fields obey the principle of superposition - \textbf{the total field is the direct sum of the individual vector fields.}
\newline\linebreak
\textbf{Math}
\newline
Consider 2 EM waves of freq $\omega$ intersecting at point r - 
$$E_1(r,t)=E_{01}cos(k_1r-\omega t+\phi_1)$$
$$E_2(r,t)=E_{02}cos(k_2r-\omega t+\phi_2)$$
Total electric field is $E=E_1+E_2$. But optical detectors cannot follow PHz oscillations, so they measure irradiance/intensity, which is derived as - 
$$I=c\epsilon_0\langle|E|^2\rangle=c\epsilon_0(\langle|E_1|^2\rangle+\langle|E_2|^2\rangle+2\langle E_1.E_2\rangle)$$
Evaluating cycle average, we get fundamental 2-beam interference eqn - 
$$I=I_1+I_2+2\sqrt{I_1I_2}cos\theta_{pol}cos(\Delta\phi)$$
where: $I_1, I_2\to\ $Individual beam intensities; $cos\theta_{pol}\to\ $angle b/w 2 polarization vectors($\hat{e_1}.\hat{e_2}=cos\theta_{pol}$; $\Delta\phi=(k_2-k_1).r+(\phi_2-\phi_1)\to\ $Phase difference.
\newline
The term $2\sqrt{I_1I_2}cos\theta_{pol}cos(\Delta\phi)$ is the interference term.
\newline\linebreak
\textbf{Interference Conditions and Fringe Visibility}
\newline
Assuming parallel polarizations: $cos\theta_{pol}=1$
\begin{itemize}
    \item Constructive: $cos(\Delta\phi)=1\to\ \Delta\phi=2m\pi(m\in\mathbb{Z})$
    $$I_{max}=I_1+I_2+2\sqrt{I_1I_2}=(\sqrt{I_1}+\sqrt{I_2})^2$$
    \item Destructive: $cos(\Delta\phi)=-11\to\ \Delta\phi=(2m+1)\pi(m\in\mathbb{Z})$
    $$I_{min}=I_1+I_2-2\sqrt{I_1I_2}=(\sqrt{I_1}-\sqrt{I_2})^2$$
    \item Fringe Visibility: Quality of interference pattern is quantified by Michelson's visibility:
    $$V=\frac{I_{max}-I_{min}}{I_{max}+I_{min}}=\frac{2\sqrt{I_1I_2}}{I_1+I_2}cos\theta_{pol}|\gamma_{12}(\tau)|$$
    where, $|\gamma_{12}(\tau)|\to\ $degree of mutual coherence($0\leq|\gamma_{12}|\leq1$).
\end{itemize}
\textbf{Key Constraints: Fresnel-Arago Laws}
\begin{itemize}
    \item Orthogonal polarizations do not interfere - $$\because cos\theta_{pol}=0$$
    No scalar intensity modulation or fringes appear. Instead, the superposition produces a spatially modulated state of polarization(e.g., cycling linearly $\to$ elliptically $\to$ circularly).
    \item To observe stationary fringes over time, the two sources must maintain a constant relative phase ($\Delta\phi(t) = \text{const}$). Independent thermal light sources fluctuate randomly on femtosecond timescales, wiping out fringes ($\langle \cos\Delta\phi \rangle = 0$).
\end{itemize}
\textbf{Interferometers}
\newline
Instrument that uses interference patterns formed by waves to measure certain characteristics of waves themselves or or materials that reflect/refract/transmit the waves.
\newline\linebreak
\textbf{QUESTIONS}
\begin{enumerate}
    \item Two laser beams of equal intensity $I_0$ have orthogonal linear polarizations ($E_1 = E_0\cos(kz - \omega t)\hat{x}$ and $E_2 = E_0\cos(kz - \omega t + \pi)\hat{y}$). What is the total measured intensity $I$? What is the resulting state of polarization of the combined beam?
    $$\to$$
    \begin{itemize}
        \item Total measure intensity is $2I_0$.
        \item State of Polarization -
        $$E_x(z,t) = E_0 \cos(kz - \omega t)$$
        $$E_y(z,t) = E_0 \cos(kz - \omega t + \pi) = -E_0 \cos(kz - \omega t)$$
        $E_y(z,t) = -E_x(z,t)$ at all points and at all times. Because the phase difference is a fixed multiple of $\pi$ ($\Delta\phi = \pi$), the components remain perfectly in phase (with a sign flip). 
        \newline
        The resultant vector is:
        $$E(z,t) = E_0 \cos(kz - \omega t)( \hat{x} - \hat{y})$$
        This describes linear polarization tilted at $-45^\circ$ (or $135^\circ$) with amplitude $\sqrt{2}E_0$, rather than an elliptical or circular state.
    \end{itemize}
    \item A probe laser with $\lambda_0 = 800nm$ passes through a plasma channel and produces a fringe shift of $\Delta N = 1$ fringe. Find the line-integrated electron density $\int n_e \, dz$ in $cm^{-2}$ given $n_c \approx 1.74 \times 10^{21} cm^{-3}$.
    $$\to$$
    \begin{itemize}
        \item Relate Optical Phase Shift to Plasma Density.
        $$n_{plasma}=n_p= \sqrt{1 - \frac{n_e}{n_c}} \approx 1 - \frac{n_e}{2n_c}$$
        Accumulated phase difference b/w plasma path and reference vacuum path over a propagation length $L$ is:
        $$\Delta\phi = \int_0^L (k_{vac} - k_{plasma}) \, dz = \frac{2\pi}{\lambda_0} \int_0^L (1 - n_p) \, dz$$
        Substitute $1 - n_p \approx \frac{n_e}{2n_c}$:$$\Delta\phi = \frac{2\pi}{\lambda_0} \int_0^L \frac{n_e(z)}{2n_c} \, dz = \frac{\pi}{\lambda_0 n_c} \int_0^L n_e(z) \, dz$$
        \item Relate Phase Shift to Fringe Shift ($\Delta N$) - In interferometry, one full fringe shift ($\Delta N = 1$) corresponds to a phase shift of exactly $2\pi$ radians:
        $$\Delta N = \frac{\Delta\phi}{2\pi} = \frac{1}{2\lambda_0 n_c} \int_0^L n_e(z) \, dz$$
        \item Rearrange for the Line-Integrated Density - Taking $\Delta N = 1$:
        $$\int_0^L n_e(z) \, dz = 2 \lambda_0 n_c. \Delta N = 2 \lambda_0 n_c$$
        \item Plug in numerical values - 
        $$\lambda_0 = 800nm = 8 \times 10^{-5}cm$$
        $$n_c \approx 1.74 \times 10^{21}cm^{-3}$$
        $$\int_0^L n_e(z) \, dz = 2 \times (8 \times 10^{-5}cm) \times (1.74 \times 10^{21}cm^{-3})$$
        $$\int_0^L n_e(z) \, dz = 16 \times 1.74 \times 10^{16}cm^{-2} \approx 2.78 \times 10^{17} cm^{-2}$$
        \item Final result - A shift of 1 fringe corresponds directly to an areal electron density of approximately $2.8 \times 10^{17}cm^{-2}$.
    \end{itemize}
\end{enumerate}
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
