// Data store of topics and their raw Overleaf LaTeX text
const notes = [
  {
    id: "1",
    title: "Optics - math and applications",
    content: String.raw`\subsection*{Optics - math and applications}
\begin{enumerate}
    \item \textbf{Plane Mirror}
    \begin{itemize}
        \item Reflects rays symmetrically. Image is virtual, upright, same size.
        \item Everyday household mirrors.
    \end{itemize}
    \item \textbf{Concave Mirror - Converging}
    \begin{itemize}
        \item Converges to focal point. Image is either real, inverted, far or virtual, upright, close.
        \item Negative focal length.
        \item Shaving mirrors, telescopes, headlights.
    \end{itemize}
    \item \textbf{Convex Mirror - Diverging}
    \begin{itemize}
        \item Diverges rays outward. Image is virtual, upright, diminished.
        \item Positive focal length.
        \item Rear view, security mirrors.
    \end{itemize}
    \item \textbf{Convex Lens - Converging}
    \begin{itemize}
        \item Converges parallel rays to focal point. Thicker in the middle.
        \item Positive focal length.
        \item Magnifying glasses, camera lens, human eye lens, hyperopia(farsight) correction.
    \end{itemize}
    \item \textbf{Concave Lens - Diverging}
    \begin{itemize}
        \item Spreads parallel rays apart - appear to originate from focus. Thicker at edges.
        \item Negative focal length.
        \item Flashlights, laser systems, myopia(nearsight) correction.
    \end{itemize}
\end{enumerate}
\begin{description}
    \item \textbf{Focal Length:}
    $$f = R/2$$
    where, R - radius of curvature.
    \item \textbf{Mirror/Lens Formula:}
    $$\frac{1}{f} = \frac{1}{u}+\frac{1}{v}$$
    where, u - object distance; v - image distance
    \item \textbf{Magnification:}
    $$m = -\frac{v}{u} = \frac{h_i}{h_o}$$
    \begin{itemize}
        \item $m<0 \rightarrow$ real, inverted image.
        \item $m>0 \rightarrow$ virtual, upright image.
    \end{itemize}
    \item \textbf{Snell's Law:}
    $$n_1sin\theta_1 = n_2sin\theta_2$$
    \item \textbf{Lens-maker's Formula:}
    $$\frac{1}{f} = (n-1)(\frac{1}{R_1}-\frac{1}{R_2}$$
    where, R1 - radius of curvature of first surface encountered
    \item \textbf{Lens Power: measured in Diopters(D)}
    $$P = \frac{1}{f(in\ metres)}$$
    $1D = 1m^{-1}$
\end{description}
\hrule
    `,
  },
  {
    id: "2",
    title: "OAP",
    content: String.raw`\subsection*{Off Axis Parabolas - OAPs}
Mirror segment cut from parent paraboloid. Unlike spherical mirror that suffer from spherical aberrations, parabolic surfaces focuses parallel rays to diffraction limited focal point without geometric aberration.
\newline
Summary:
\begin{itemize}
    \item Main fn - achromatic focusing, collimation.
    \item Advantage - Low geometric aberration, 0 chromatic dispersion.
    \item Limitation - Sensitivity to alignment.
\end{itemize}
\hrule`,
  },
  {
    id: "3",
    title: "Dielectric Mirrors - HR coatings",
    content: String.raw`\subsection*{Dielectric Mirrors - HR coatings}
Standard Au/Ag/Al coated mirrors rely on free $e^-$ in the metal to reflect light, but they also absorb around 1-5\% incident energy. At GW/TW powers, this small absorption instantly vaporizes the metal film. Dielectric mirrors(Highly-Reflective coatings) solve this by using non-absorbing dielectric materials.
\newline
Working - Thin Film Interference
\begin{itemize}
    \item Constructed by depositing alternating high-n($TiO_2,\ HfO_2$) and low-n($SiO_2$) thin films onto low expansion substrate like fused Silica.
    \item Each layer has thickness equal to quarter of target wavelength.
    \item Fresnel reflection from every layer interfere constructively in reflection and destructively in transmission.
\end{itemize}
Summary:
\begin{itemize}
    \item Main fn - High efficiency beam steering.
    \item Advantage - Near 0 absorption.
    \item Limitation - Narrow spectral bandwidth.
\end{itemize}
\hrule`,
  },
  {
    id: "4",
    title: "Dichroic Mirrors, Beam Splitters",
    content: String.raw`\subsection*{Dichroic Mirrors, Beam Splitters}
Specialized dielectric filter that selectively reflects certain wavelengths while transmitting others with high efficiency. Manufactured using precise dielectric quarter-wave stacks.
\newline
Types - 
\begin{enumerate}
    \item Shortpass: reflects long wavelengths, transmits short.
    \item Longpass: reflects short wavelengths, transmits long.
    \item Notch/Bandpass: reflects/transmits narrow spectral band.
\end{enumerate}
Applications - 
\begin{itemize}
    \item Pump probe and harmonic separation: separating fundamental freq. from harmonic generation.
    \item Beam combing: Overlapping 2 lasers of different freq in co-linear path.
\end{itemize}
Summary:
\begin{itemize}
    \item Main fn - Spectral routing, beam combination.
    \item Advantage - Sharp spectral transition without loss.
    \item Limitation - Phase distortion.
\end{itemize}
\hrule`,
  },
  {
    id: "5",
    title: "Optical Diffraction Gratings",
    content: String.raw`\subsection*{Optical Diffraction Gratings}
Utilize microscopic periodic structures to spatially disperse light into constituent wavelengths via diffraction. When light hits a grating with grove spacing $d$ at angle of incidence $\alpha$, diffracted angle $\beta_m$ for order $m$ is given as:
$$d(sin\alpha\  +\ sin\beta_m) = m\lambda$$
Summary:
\begin{itemize}
    \item Main fn - Spectral dispersion, pulse shaping.
    \item Advantage - Useful for CPA.
    \item Limitation - Efficiency varies with polarization.
\end{itemize}
\hrule`,
  },
  {
    id: "6",
    title: "ESM Stage Mechanical Components",
    content: String.raw`\subsection*{ESM stage mechanical components}
\begin{enumerate}
    \item \textbf{Beam shaft Coupler}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.5\linewidth]{coupler.jpg}
    \end{figure}
    \begin{itemize}
        \item Al flexible helical coupler - flexible coupling.
        \item Connects 2 rotating shafts(motor shaft to lead screw/smooth rod) to transmit torque while absorbing small axial, angular, radial misalignment.
        \item Spiral cut acts as flexible spring.
        \item Insert a shaft into each end and tighten the grub screws to lock shafts in place.
        \item Used in 3D printers, CNC routers, optical translational stages, precision motion systems.
    \end{itemize}
    \item \textbf{Lead Screw}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.5\linewidth]{lead screw.jpg}
    \end{figure}
    \begin{itemize}
        \item Precision threaded lead screw(typically T8 SS) fitted with brass lead nuts.
        \item Converts rotational motion to translation. As screw spins, stationary brass nut travels axially along the threads.
        \item Lead screw is driven by motor(usually coupled with coupler). Brass nut is fixed to moving carriage(stage/laser mount) to push it forward and backward.
        \item Used in linear actuators, Z-axis motion, CNC axis drives, opto-mechanical position stages.
    \end{itemize}
    \item \textbf{Linear Motion Ball Bearing Block(SBR/SCS Series)}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.5\linewidth]{bearing blocks.jpg}
    \end{figure}
    \begin{itemize}
        \item Al linear sliding block bearing housings containing internal recirculating ball bearings.
        \item Provides smooth, low friction linear motion along smooth ground optical guide rod/shaft.
        \item Smooth hardened steel rod passes through center. Internal steel ball bearings roll along the rod. Payload(plate/sensor mount) is bolted onto the 4 tapped mounting holes on top.
        \item Used in high precision linear guide rails, CNC routers, automated camera/sensor sliders, lab motion stages.
    \end{itemize}
    \item \textbf{Flanged Bearing Block/Pillow Block Bearing(KFL Series)}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.5\linewidth]{bearing.jpg}
    \end{figure}
    \begin{itemize}
        \item Self aligning Zn alloy flanged bearing housing(typically for 8mm shafts).
        \item Supports end of rotating rod(lead screw) keeping it centered and contstrained allowing low friction motion.
        \item Flange is bolted onto flat structural frame via 2 mounting holes. Lead screw slides through inner hole and is secured by set screws located on inner collar.
        \item Used in automated optical position stages, Z-axis lead screws in 3D printers.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "7",
    title: "Hex Socket Head Cap Screws - Fasteners",
    content: String.raw`\subsection*{Hex Socket Head Cap Screws - Fasteners}
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{screws.jpg}
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.45\textwidth}
        \includegraphics[width=\linewidth]{more screws.jpg}
    \end{subfigure}
\end{figure}
They are metric Socket Head Cap Screws(SCHS) made of SS, driven using Allen(hex) key. Used to fasten structural plates, bearing blocks, motors, etc., together.
\newline
Measurement - 
\begin{itemize}
    \item Designated as $MX\ \times\ Y$.
    \item $X$ - thread dia/ metric size - major outer dia in mm.
    \item $Y$ - length of threaded shaft excluding head in mm.
    \item Check using vernier calipers.
\end{itemize}
\hrule`,
  },
  {
    id: "8",
    title: "Coherent Astrella",
    content: String.raw`\subsection*{Coherent Astrella}
\begin{enumerate}
    \item \textbf{Laser Assembly}
    \begin{figure}[H]
        \centering
        \begin{subfigure}{0.3\textwidth}
            \includegraphics[width=\linewidth]{laser1.jpeg}
        \end{subfigure}
        \begin{subfigure}{0.3\textwidth}
            \includegraphics[width=\linewidth]{full laser.jpeg}
        \end{subfigure}
        \begin{subfigure}{0.3\textwidth}
            \includegraphics[width=\linewidth]{laser2.jpeg}
        \end{subfigure}
    \end{figure}
    \begin{itemize}
        \item 80MHz diode pumped laser $\rightarrow$ Oscillator - produces short fs pulse, but is not completely monochromatic because of ultrafast pulse $\rightarrow$ CPA setup, starting with stretcher - stretches pulses into individual wavelengths $\rightarrow$ amplifier cavity - pumped by 2nd 80Hz diode pumped laser $\rightarrow$ outlet.
        \item Oscillator is mode locked.
    \end{itemize}
    \item \textbf{Power?}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.5\linewidth]{power.jpg}
    \end{figure}
    \begin{itemize}
        \item 
    \end{itemize}
    \item \textbf{Temp control?}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.5\linewidth]{temp.jpeg}
    \end{figure}
    \begin{itemize}
        \item 
    \end{itemize}
    \item \textbf{Controller?}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.5\linewidth]{controller.jpeg}
    \end{figure}
    \begin{itemize}
        \item 
    \end{itemize}
    \item \textbf{Software?}
    \begin{figure}[H]
        \centering
        \includegraphics[width=0.5\linewidth]{laptop software.jpeg}
    \end{figure}
    \begin{itemize}
        \item 
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "9",
    title: "Why 80MHz pump used for oscillator and 80Hz for amplifier?",
    content: String.raw`\subsection*{Why 80MHz pump used for oscillator and 80Hz for amplifier?}
\begin{itemize}
    \item Thermal lensing - can be corrected using plasma optics.
    \item Pump capacity - pump medium can only provide limited power. To get TW/PW output many pumps are stacked.
    \item 80MHz is needed at oscillator to achieve continuous population inversion($80MHz = 12.5ns$). Amplifier carries energy as gain within medium, thereby not needing continuous population inversion($80Hz = 12.5ms$).
    \item A mode locked laser oscillator relies on continuous, steady state population inversion to sustain cavity oscillations and Kerr-Lens Mode-locking(KLM).
    \item The upper state lifetime($\tau_{\text{upper}}$) of typical ultrafast media(like Ti:Sapphire) is roughly $3.2\mu s$. An 80 Hz pump pulse arrives every $12.5ms$. Because $12.5ms \gg 3.2\mu s$, the population inversion completely decays long before the next pump pulse arrives. The cavity loses lasing and cannot maintain mode locking. Hence, oscillators require CW (continuous wave) or high repetition rate(80 MHz) pumps.
    \item An amplifier(such as a CPA) operates on single shot or low repetition rate events. It stores energy in the gain medium from a single high-energy pump pulse ($10–100mJ$) and holds it for a few microseconds. 
    \item A single seed pulse from the oscillator is timed to pass through during this window to extract all the stored energy at once.
\end{itemize}
\hrule`,
  },
  {
    id: "10",
    title: "Allied Vision Alvium G1 GigE Camera",
    content: String.raw`\subsection*{Allied Vision Alvium G1 GigE Camera}
\begin{itemize}
    \item Camera used in mirror alignment. Allied vision - brand, Alvium - model, G1 - model number.
    \item G1 GigE is an area scan camera that uses Gigabit-Ethernet(GigE) interface to transfer images/data.  
\end{itemize}
\begin{figure}[H]
    \begin{subfigure}{0.25\textwidth}
        \includegraphics[width=\linewidth]{camera1.jpeg}
    \end{subfigure}
    \begin{subfigure}{0.25\textwidth}
        \includegraphics[width=\linewidth]{camera2.jpeg}
    \end{subfigure}
    \begin{subfigure}{0.25\textwidth}
        \includegraphics[width=\linewidth]{camera3.jpeg}
    \end{subfigure}
    \begin{subfigure}{0.22\textwidth}
        \includegraphics[width=\linewidth]{camera4.jpg}
    \end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "11",
    title: "PoE, Ethernet switch",
    content: String.raw`\subsection*{PoE, Ethernet switch}
\begin{itemize}
    \item PoE - Power over Ethernet
    \item Camera runs on PoE, that is it does not need external power supply.
    \item Ethernet cable from camera goes to switch(image below) that provides power to share data.
\end{itemize}
\begin{figure}[H]
    \centering
    \begin{subfigure}{0.4\textwidth}
        \includegraphics[width=\linewidth]{switch1.jpeg}
    \end{subfigure}
    \begin{subfigure}{0.4\textwidth}
        \includegraphics[width=\linewidth]{switch2.jpeg}
    \end{subfigure}
\end{figure}
\hrule`,
  },
  {
    id: "12",
    title: "Polyethylene sheets?",
    content: String.raw`\subsection*{Polyehtylene sheets?}
Polyethylene (PE) sheets are versatile thermoplastic sheets made from polymerizing ethylene gas($-[CH_2-CH_2]_n-$). They range from thin, flexible plastic films(LDPE - Low Density Polyethylene) to thick, rigid, heavy duty boards(HDPE - High Density Polyethylene). Because polyethylene is chemically inert, moisture-resistant, lightweight, and extremely rich in hydrogen atoms, it plays a vital role both in advanced high-intensity physics labs and in general industrial/construction applications.
\newline
While heavy metals like lead(high Z) are used to stop X-rays and gamma rays, polyethylene(low Z, high hydrogen) is the gold standard for stopping fast neutrons.
\hrule `,
  },
  {
    id: "13",
    title: "PTFE flexible pipes?",
    content: String.raw`\subsection*{PTFE flexible pipes?}
Polytetraflouroethylene - Highly inert, flexible polymer tubes. It is highly inert because all outer H bonds are replaces with F. F being highly electronegative, bonds strongly with C so pipe is highly non-reactive.
\newline
Made by Teflon - used in non-stick cookware, etc.,
\hrule`,
  },
  {
    id: "14",
    title: "Why Pb?",
    content: String.raw`\subsection*{Why Pb?}
Main use is for shielding against X-rays and other harmful radiation.
\newline
Mass attenuation of photons scales strongly with atomic number(Z). Lead(Z=82) is uniquely suited to absorb high-energy photons via the photoelectric effect, Compton scattering, and pair production in a compact thickness.
\hrule`,
  },
  {
    id: "15",
    title: "Laser DOF",
    content: String.raw`\subsection*{Laser DOF}
Lasers have 4 DOF in 3D space. 4 DOF determine exact behavior of beam traveling along Z-axis of optical table when intercepted using a screen/sensor
\begin{enumerate}
    \item \textbf{(Horizontal position - Translation($x$)} - Physical left/right displacement. Changing this only moves spot left/right screen without changing the direction the beam is traveling.
    \item \textbf{Vertical position - Translation($y$)} - Physical up/down displacement along vertical axis.Changing this moves spot up/down on a target screen, remaining completely parallel to its original path.
    \item \textbf{Horizontal angle - Azimuth($\theta_x$)} - Rotation/Pointing - Horizontal tilt/tip/yaw. Changing this causes beam to alter its trajectory left/right. As the beam propagates, its horizontal displacement from the target center grows linearly. 
    \item \textbf{Vertical angle - Elevation($\theta_y$)} - Rotation/Pointing - Vertical tilt, pitch of beam path. Changing this points the laser up/down. Further the beam travels, the higher/lower it strikes a target.
\end{enumerate}
Managing DOF - 
\begin{itemize}
    \item The primary difficulty in alignment is that position and angle are naturally coupled when using standard mirrors.
    \item Tilting a single mirror to correct the pointing angle($\theta_x$), simultaneously shifts the spatial position($x$) of the beam on any target.
    \item Cannot isolate a single DOF with a single adjustment point. To fully decouple the 4 DOFs, an optical system requires a minimum of two independent kinematic mirror mounts placed in series.
    \item M1 is adjusted to establish the correct spatial position($x, y$) at the plane of M2, and M2 is adjusted to correct the final alignment angles($\theta_x, \theta_y$) entering the target camera or sensor.
\end{itemize}
\hrule`,
  },
  {
    id: "16",
    title: "Lorentz Force",
    content: String.raw`\subsection*{Lorentz Force}
Instantaneous force experienced by a charged particle moving through an EM field.
$$F\ =\ q(E+(\text{v}\times B))$$
\begin{itemize}
    \item Electric component($F_E=qE$) acts parallel or antiparallel depending on sign of $q$. It does work on the particle, altering it's KE - it accelerates/decelerates the charges along the field lines, regardless of particle being moving/stationary.
    \item Magnetic component($F_B=q(\text{v}\times B$) depends explicitly on particle's velocity. Acts perpendicular to both the velocity and mag-field vectors, governed by cross product.
    \item \textbf{No-Work Theorem}: Static mag-field does zero work on a free moving charge. It cannot change the KE or speed of the particle, it can only bend its trajectory by continuously redirecting the velocity vector.
    $$\because\text{cross product,} F_B \perp \text{v} \rightarrow F_B.\text{v}=0$$
    $$\text{Instantaneous power transferred by mag-field: } P_B=F_B.\text{v}=0$$
\end{itemize}
Trajectory Dynamics:
\begin{enumerate}
    \item Uniform Static Mag-field(E=0, B=$B_0\hat{z}$)
    \begin{itemize}
        \item If charge enters perpendicular to field with $\text{v}=\text{v}_0\hat{x}$, magnetic force supplies centripetal acceleration for uniform circular motion - 
        $$q\text{v}_0B_0=\frac{m\text{v}_0^2}{r_c}$$
        \item $r_c\ \rightarrow\ $ Cyclotron/Larmor radius: $r_c=\frac{m\text{v}_0}{|q|B}$
        \item The angular freq of this gyration(cyclotron freq) is independent of particle velocity: $\omega_c=\frac{\text{v}_0}{r_c}=\frac{|q|B}{m}$
        \item If v has a component along B($\text{v}_z\ne 0$), axial component remains unaffected but transverse component gyrates, forming a helix.
    \end{itemize}
    \item Crossed fields(E$\perp$B)
    \begin{itemize}
        \item When $E=E_0\hat{y}$ and $B=B_0\hat{z}$, a charge can pass straight through unaffected if the electric and magnetic forces balance exactly $\rightarrow\ F_E+F_B=0$.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "17",
    title: "Fleming's Left Hand Rule",
    content: String.raw`\subsection*{Fleming's Left Hand Rule}
Determine direction of force on a charge in a mag-field.
\begin{itemize}
    \item Index: Mag-field.
    \item Middle: Electric field.
    \item Thumb: Force
\end{itemize}
\hrule`,
  },
  {
    id: "18",
    title: "Relativistic Physics",
    content: String.raw`\subsection*{Relativistic physics}
Study of special relativity, starts with breakdown of Newtonian mechanics near speed of light. Relies on 2 fundamental postulates.
\begin{enumerate}
    \item Principle of Relativity: Laws of physics are identical in all inertial reference frames.
    \item Constancy of Light Speed: Speed of light in vacuum is independent of motion of emitting source or observer.
\end{enumerate}
When object moves with velocity v relative to an observer, classical Galilean transformation($x'=x-\text{v}t$) breaks down and is replaced by Lorentz transformation. Core scaling factor is the Lorentz factor.
$$\gamma\ =\ \frac{1}{\sqrt{1-\frac{\text{v}^2}{c^2}}}\ =\ \frac{1}{\sqrt{1-\beta}}$$
As v $\rightarrow$ 0, $\gamma \rightarrow 1$: classical physics. As v $\rightarrow$ c, $\gamma \rightarrow \infty$
\newline
\linebreak
\textbf{Relativistic Dynamics - Mass, Momentum, Energy}
\begin{itemize}
    \item Relativistic Momentum
    $$p\ =\ \gamma m_0\text{v}$$
    \item Total energy
    $$E\ =\ \gamma m_0c^2\ =\ E_{KE}+m_0c^2$$
    \item Relativistic energy-momentum relation
    $$E^2\ =\ \gamma^2m_0^2c^4\  =\ \frac{m_0^2c^4}{1-\text{v}^2/c^2}$$
    $$p^2c^2\ =\ \gamma^2m_0^2\text{v}^2c^2\ =\ \frac{m_0^2\text{v}^2c^2}{1-\text{v}^2/c^2}$$
    $$E^2 - p^2 c^2 = \frac{m_0^2 c^4 - m_0^2\text{v}^2 c^2}{1 - \text{v}^2/c^2} = \frac{m_0^2 c^4 \left(1 - \frac{\text{v}^2}{c^2}\right)}{1 - \frac{\text{v}^2}{c^2}} = m_0^2 c^4$$
    $$\therefore\ E^2\ =\ (pc)^2+(m_0c^2)^2$$
\end{itemize}
\textbf{Relativistic Lorentz Force}
$$F=\frac{dp}{dt}=\frac{d}{dt}(\gamma m_0\text{v})\ =\ q(E+(\text{v}\times B))$$
$$\text{Because }\gamma \text{ depends on speed }v=|\text{v}|\text{ differentiating p}\rightarrow\ F\ =\ m_0\gamma\frac{d\text{v}}{dt}+m_0\text{v}\frac{d\gamma}{dt}$$
\begin{itemize}
    \item If $F\perp \text{v}$(only transverse force), speed $v$ is constant(only magnitude is constant, direction will change), $d\gamma/dt=0$
    $$F_{\perp}=\gamma m_0a_{\perp}$$
    \item If $F\parallel\text{v}$(only longitudinal force), $d\gamma/dt = \gamma^3.\frac{va}{c^2}$
    $$F_\parallel\ =\ \gamma^3m_0a_\parallel$$
    \item Means a particle becomes much heavier(hard to accelerate) longitudinally than transversely by a factor of $\gamma^2$ as it approaches c.
\end{itemize}
\textbf{QUESTIONS}
\begin{enumerate}
    \item Consider a photon with zero rest mass($m_0 = 0$).Express the momentum of the photon in terms of its energy $E$ and $c$.
    $$E^2=(pc)^2+(m_0c^2)^2$$
    $$\therefore p=E/c$$
    \item An ultra-relativistic electron is accelerated until its total energy $E$ is 10 times its rest energy($E = 10 \, m_0 c^2$). What is its Lorentz factor $\gamma$ and what is its speed $v$ expressed as a fraction of $c$?
    $$E=\gamma m_0c^2=10m_0c^2$$
    $$\therefore\ \gamma=10$$
    $$\gamma=\frac{1}{\sqrt{1-v^2/c^2}}$$
    $$\therefore\ v/c=\sqrt{0.99}=0.9948\ or\ v=99.5\%\ of\ c$$
\end{enumerate}
\hrule`,
  },
  {
    id: "19",
    title: "Electromagnetic Waves",
    content: String.raw`\subsection*{Principles and Equations of EM Wave}
EM waves are self propagating oscillations of coupled electric and magnetic fields traveling through space.
\linebreak
\textbf{Maxwell's Equations(in vacuum)}
\newline
In a charge-free($\rho=0$) and current-free($J=0$) vacuum, classical electrodynamics is governed by - 
\begin{itemize}
    \item Gauss's Law for Electricity: $\nabla\  .\ E\ =\ \frac{\rho}{\epsilon_0}\ =\ 0$
    \item Gauss's Law for Magnetism: $\nabla\ .\ B\ =\ 0$
    \item Faraday's Law of Induction: $\nabla\ \times\ E\ =\ -\frac{\partial B}{\partial t}$
    \item Ampère-Maxwell Law: $\nabla\ \times\ B\ =\ \mu_0J+ \mu_0\epsilon_0\frac{\partial E}{\partial t}\ =\ \mu_0\epsilon_0\frac{\partial E}{\partial t}$
\end{itemize}
\textbf{EM Wave Equation}
\newline
Decouple E and B by taking curl of Faraday's Law:
$$\nabla\times(\nabla\times E)=\nabla\times\bigg(-\frac{\partial B}{\partial t}\bigg)$$
$$\text{Using vector identity on LHS: } \nabla\times(\nabla\times A)=\nabla(\nabla.A)-\nabla^2A$$
$$\nabla(\nabla.E)-\nabla^2E=-\frac{\partial}{\partial t}(\nabla\times B)$$
$$\nabla.E=0\ \text{ and } (\nabla\times B)=\mu_0\epsilon_0(\frac{\partial E}{\partial t})\ \rightarrow\ \text{Maxwell's Eqns.}$$
$$-\nabla^2E=-\frac{\partial}{\partial t}\bigg(\mu_0\epsilon_0\frac{\partial E}{\partial t}\bigg)$$
$$\nabla^2E=\mu_0\epsilon_0\frac{\partial^2E}{\partial^2t}$$
\newline
Comparing with 3D wave eqn($\nabla^2f=\frac{1}{v^2}\frac{\partial^2f}{\partial^2t}$), we see electric field satisfies wave eqn with phase velocity -
$$v=\frac{1}{\sqrt{\mu_0\epsilon_0}}\equiv\ c\approx3\times10^8\ m/s$$
Same process on Ampere's Law yields: $\nabla^2B=\frac{1}{c^2}\frac{\partial^2B}{\partial^2t}$
\newline \linebreak
\textbf{Wave Structure \& Geometry}
\newline
For an EM plane wave propagating along +z,
$$E(z,t)\ =\ E_0cos(kz-\omega t)\hat{x}$$
$$B(z,t)\ =\ B_0cos(kz-\omega t)\hat{y}$$
$$k=\frac{2\pi}{\lambda}\rightarrow\text{Wave number ; }\omega=2\pi f\rightarrow\text{Angular frequency ; }\omega/k=c$$
$$***\ cos(kz-\omega t)=cos(-(\omega t-kz))=cos(\omega t-kz)\rightarrow cos(-\theta)=cos\theta\ ***$$
\begin{itemize}
    \item $kz-\omega t$ - used mainly in optics and physics; focuses on spatial propagation.
    \item $\omega t-kz$ - used in engineering and signal processing; focuses on time harmonic signals.
\end{itemize}
\textbf{QUESTIONS}
\begin{enumerate}
    \item Suppose an EM plane wave in vacuum has an electric field vector given by: $\mathbf{E}(y,t) = E_0 \cos(ky + \omega t) \hat{\mathbf{z}}$. In which spatial direction ($+x, -x, +y, -y, +z, -z$) is this wave propagating?
    $$-y\ \text{direction }\because\ (ky+\omega t)\rightarrow\ \text{-ve axis propagation.}$$
\end{enumerate}
\hrule`,
  },
  {
    id: "20",
    title: "Potentials",
    content: String.raw`\subsection*{Potentials}
In electrodynamics, scalar potential($\phi(r,t)$) and vector potential($A(r,t)$) belong only to the field. They exist at every point in space($r$) whether or not a particle is present. When a particle with charge q is placed at position r, interaction energy and force depend on charge.
\newline
An electron and proton at the same position will experience the same field potentials. Their potential energies and force will be in opposite directions because of their opposite charge.
\newline\linebreak
\textbf{Magnetic Vector Potential(A)}
\newline
Since divergence of any vector field's curl is 0($\nabla.(\nabla\times V)=0$), Maxwell's 2nd eqn($\nabla.B=0$) guarantees that B can always be written as curl of a vector potential.
$$B=\nabla\times A$$
\textbf{Scalar Electric Potential($\phi$)}
\newline
Substituting $B=\nabla\times A$ into Faraday's Law:
$$\nabla\times E = -\frac{\partial}{\partial t}(\nabla\times A)$$
$$\nabla\times\bigg(E+\frac{\partial A}{\partial t}\bigg)=0$$
Since any curl-free vector field can be expressed as the gradient of a scalar potential($\nabla\times(\nabla V)=0$), we can define:
$$E=\frac{\partial A}{\partial t}\ =\ -\nabla\phi\ \rightarrow\ E\ =\ -\nabla\phi-\frac{\partial A}{\partial t}$$
In electrostatics, A=0 $\rightarrow\ E=-\nabla\phi$
\newline\linebreak
\textbf{Gauge Transformations and Freedom}
\newline
Physical fields are E, B. Potentials A, $\phi$ are not unique - we can transform them without altering fields.
$$\text{If we transform }A\rightarrow A'=A+\nabla\Lambda\text{ for any scalar fn }\Lambda(r,t):$$
$$B'=\nabla\times A'=\nabla\times A + \nabla\times(\nabla\Lambda)=\nabla\times A = B$$
$$\text{To keep E unchanged: }\phi'=\phi-\frac{\partial\Lambda}{\partial t}$$
Freedom to choose $\Lambda$ is \textbf{Gauge Invariance}. 2 common gauge choices are - 
\begin{enumerate}
    \item Coulomb Gauge($\nabla.A=0$)
    \item Lorentz Gauge($\nabla.A+\mu_0\epsilon_0\frac{\partial\phi}{\partial t}=0$)
\end{enumerate}
\textbf{QUESTIONS}
\newline
\begin{enumerate}
    \item Suppose you are given the potentials:$\mathbf{A}(\mathbf{r}, t) = C t \hat{\mathbf{x}}, \quad \Phi(\mathbf{r}, t) = 0$, where $C$ is a constant. Calculate the corresponding physical electric field $\mathbf{E}$ and magnetic field $\mathbf{B}$.
    $$\rightarrow$$
    $$\phi=0, \nabla\phi=0\rightarrow$$
    $$\frac{\partial A}{\partial t}=\frac{\partial}{\partial t}Ct\hat{x}=C\hat{x}$$
    $$E=0-C\hat{x}=-C\hat{x}$$
    $$B=\nabla\times A = = \begin{vmatrix} \hat{x} & \hat{y} & \hat{z} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ Ct & 0 & 0 \end{vmatrix} = 0 \hat{x} + 0 \hat{y} + 0 \hat{z} = 0$$
\end{enumerate}
\hrule`,
  },
  {
    id: "21",
    title: "Kerr Effect",
    content: String.raw`\subsection*{Kerr Effect}
Third-order nonlinear optical phenomenon($\chi^{(3)}$) where a material's refractive index changes in response to the intensity of an applied optical electric field.
$$n(I)\ =\ n_0\ +\ n_2I$$
\begin{enumerate}
    \item Electro-optic(DC) Kerr Effect: External static field is applied across an isotropic medium. This aligns the molecules inducing artificial birefringence.
    $$\Delta n\propto E_{DC}^2$$
    \item Optical(AC) Kerr Effect: Electric field belongs to intense optical beam. High intensity alters the medium's response making n intensity dependent.
    $$\Delta n\propto I$$
\end{enumerate}
\textbf{Effects in LPI}
\newline
\textbf{Spatial domain - Kerr lens self-focusing}
\begin{itemize}
    \item Laser beams have Gaussian profile - high I on axis and lower I radially outward. Center of beam has a higher refractive index than edges and the medium acts like a \textbf{gradient-index(GRIN) convex lens} - focusing beam inwards.
    \item When laser power exceeds critical value, self-focusing overcomes natural diffraction leading to \textbf{Kerr lens mode locking(KLM} to produce fs pulses.
    $$P_c\ =\ \frac{3.77\lambda^2}{8\pi n_0n_2}$$
\end{itemize}
\textbf{Temporal domain - Self phase modulation(SPM)}
\begin{itemize}
    \item Short laser pulse has a time dependent intensity envelope($I(t)$). As beam propagates length L, it acquires a nonlinear phase shift:
    $$\phi_{NL}(t)=-\omega_0t+k_0n(I)L=-\omega_0t+k_0n_0L+k_0n_2I(t)L$$
    \item Instantaneous freq $\omega(t)=-d\phi/dt$ is modified by time variations in intensity:
    $$\omega(t)=\omega_0-k_0n_2L\frac{dI(t)}{dt}$$
    \item On leading edge of pulse(dI/dt>0) - freq decreases - redshift. On trailing edge(dI/dt<0) - freq increases - blueshift.
\end{itemize}
\textbf{QUESTIONS}
\begin{enumerate}
    \item In a material with a positive nonlinear refractive index($n_2 > 0$), does a high intensity Gaussian beam cause self-focusing or self-defocusing? What would happen if $n_2 < 0$ (such as in a low-density plasma)?
    $$\rightarrow$$
    \begin{itemize}
        \item $n_2>0$  causes self focusing by bending wavefronts inward.
        \item $n_2<0$ nonlinear effects occur in reverse. Here, center has lower n than edges and thus, causes self-defocusing.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "22",
    title: "Self-focusing",
    content: String.raw`\subsection*{Self-focusing}
Nonlinear optical process where intense light beam modifies refractive index of propagating medium such that medium acts as converging lens, causing beam to focus onto itself.
\newline\linebreak
\textbf{Physics}
\newline
When a beam with transverse intensity profile, like Gaussian $\rightarrow I(r)=I_0exp\bigg(\frac{-2r^2}{\omega_0^2}\bigg)$ propagates through nonlinear medium:
\begin{itemize}
    \item Due to Kerr effect, refractive index becomes highest on-axis where intensity is maximum and drops radially outward.
    \item Phase velocity inside a medium is given by $v_p=c/n(r)$. Because of n(r), spatial velocity gradient warps initially flat wavefronts into concave - bending light inward.
\end{itemize}
\textbf{Threshold}
\begin{itemize}
    \item Diffraction naturally tries to expand laser beam with divergence angle, $\theta_{diff}\approx \frac{\lambda_0}{\pi n_0\omega_0}$.
    \item Self-focusing opposes this divergence with a nonlinear focusing angle, $\theta_{foc}=\sqrt{2n_2I_0}$.
    \item By equating diffraction to focusing angle, we find self-focusing not only depends on intensity but also on optical power according to:$$P_c=\frac{\alpha\lambda_0^2}{4\pi n_0n_2};\ \alpha\approx1.896\text{ to }3.77$$
    \item \textbf{Sub-critical($P<P_c$)}: Diffraction dominates, beam will diverge.
    \item \textbf{Critical balance($P=P_c$)}: Self-focusing balances linear diffraction forming self-trapped optical wave.
    \item \textbf{Super-critical($P>P_c$)}: Self-focusing overcomes diffraction. Beam collapses towards catastrophic focus until stopped by higher order nonlinearities leading to filamentation.
\end{itemize}
\textbf{Relativistic Self-focusing}
\begin{itemize}
    \item Plasma refractive index is $n_p=\sqrt{1-\frac{\omega_p^2}{\omega_0^2}}\approx1-\frac{\omega_p^2}{2\omega_0^2}$ 
    \item Because of relativistic effects, electron mass increases($m_{eff}=\gamma m_0$), plasma frequency drops($\omega_{p.eff}=\omega_p/\sqrt{\gamma}$) leading to refractive index rise - becomes highest at the center causing focusing. 
\end{itemize}
\textbf{Needs and applications}
\begin{enumerate}
    \item Highly beneficial in LWFA
    \begin{itemize}
        \item Helps overcome Rayleigh diffraction, allowing intense laser pulses to self guide over extended acceleration lengths(cm instead of Rayleigh range $z_R \sim \text{mm}$).
        \item Enables self-channeling and blow-out regime formation.
    \end{itemize}
    \item Beneficial for High Harmonic Generation(HHG)
    \begin{itemize}
        \item Enhances local peak intensity and maintains phase matching over extended interaction distances.
    \end{itemize}
    \item Disadvantage in ICF
    \begin{itemize}
        \item Causes beam filamentation, beam spray, and uneven illumination on the capsule target.
    \end{itemize}
    \item Disadvantage in Laser plasma diagnostics
    \begin{itemize}
        \item Distorts phase fronts and intensity distribution, complicating quantitative phase measurements and Thomson scattering setups.
    \end{itemize}
\end{enumerate}
\hrule`,
  },
  {
    id: "23",
    title: "Ponderomotive Force",
    content: String.raw`\subsection*{Ponderomotive Force}
Nonlinear time-averaged net force that drives charged particles away from regions of high intense EM fields. A uniform plane EM wave only causes an electron to oscillate/quiver in place without spatial drift over a full optical cycle, a gradient in field intensity breaks this symmetry.
\newline\linebreak
\textbf{Mathematical Derivation}
\newline
Consider an electron exposed to inhomogeneous, high freq electric field - $E(r,t)=E_0(r)cos(\omega t)$
$$\text{Eqn of motion }\rightarrow m_0\frac{d^2r}{dt^2}\ =\ -eE(r,t)$$
Decompose electron's position($r(t)$) into slow time-average drift position($r_0(t)$) and rapid high freq quiver oscillation($r_1(t)$).
$$r(t)=r_0(t)+r_1(t)\ \ \text{where }\ |r_1|<<|r_0|$$
Expand electric field around $r_0$:
$$E(r,t)\ \approx\ E(r_0,t)+(r_1.\nabla)E(r_0,t)$$
$$m_0\bigg(\frac{d^2r_0}{dt^2}+\frac{d^2r_1}{dt^2}\bigg)=-e[E(r_0,t)+(r_1.\nabla)E(r_0,t)]$$
At low order freq, fast motion responds directly to local field at $r_0$
$$m_0\frac{d^2r_1}{dt^2}\ =\ -eE_0(r_0)cos(\omega t)$$
Integrating twice yields 1st order quiver:
$$r_1(t)=\frac{e}{m_0\omega^2}E_0(r_0)cos(\omega t)$$
Equation of motions now becomes:
$$m_0\bigg(\frac{d^2r_0}{dt^2}+\frac{d^2r_1}{dt^2}\bigg)=-e[E_0(r_0)cos(\omega t)+(r_1.\nabla)E_0(r_0)cos(\omega t)]$$
Averaging over one laser period - $T=2\pi/\omega$:
\newline- 1st order terms become 0: $\langle cos(\omega t)\rangle=0$
\newline- 2nd order terms become: $\langle cos^2(\omega t)\rangle=1/2$
$$m_0\frac{d^2r_0}{dt^2}=F_P=-e\langle(r_1.\nabla)E_0(r_0)cos(\omega t)\rangle$$
$$F_P=-\frac{e^2}{m_0\omega^2}E_0.\nabla E_0\langle cos^2(\omega t)\rangle=-\frac{e^2}{4m_0\omega^2}\nabla(E_0^2)$$
\textbf{Physics}
\begin{itemize}
    \item Spatial asymmetry: During one half of optical cycle, electric field accelerates electrons into region of high field intensity.
    \item Unequal push: During 2nd half, field reverses but because electron is in stronger field region, restoring force pushing it in is stronger than initial pulling force.
    \item Net velocity: Over many cycles this imbalance in force leaves a net outward momentum.
\end{itemize}
\textbf{Applications}
\begin{itemize}
    \item LWFA: The longitudinal ponderomotive force at the front of a short laser pulse expels electrons, launching a plasma density wave(wakefield) behind it.
    \item Electron Channeling: The radial ponderomotive force pushes electrons out of the laser path, forming a low-density plasma channel.
    \item Mass Invariance: Notice that $F_p \propto 1/m_0$. Because $m_i \gg m_e$, the ponderomotive force acts almost exclusively on electrons, leaving ions as a stationary background on femtosecond timescales. 
\end{itemize}
\textbf{QUESTIONS}
\begin{enumerate}
    \item Suppose a laser pulse propagates in a plasma containing both electrons and protons. If the ponderomotive force on an electron is $F_{p,e}$, how does the ponderomotive force on a proton $F_{p,p}$ compare in magnitude?
    $$\rightarrow$$
    Only in magnitude the force on proton will be lower than that of electron because proton is heavier than electron.
    \item What happens to the ponderomotive force $F_p$ if you double the laser frequency while keeping the peak electric field constant? Does it increase, decrease, or remain unchanged?
    $$\rightarrow$$
    Force decreases as Fp is inversely proportional to square of frequency.
\end{enumerate}
\hrule`,
  },
  {
    id: "24",
    title: "Vector Calculus Operators",
    content: String.raw`\subsection*{Vector Calculus Operators}
In electrodynamics and plasma physics, vector calculus operators describe how field changes across space. They are defined using del operator - $\nabla$
$$\nabla\ =\ \hat{x}\frac{\partial}{\partial x}+\hat{y}\frac{\partial}{\partial y}+\hat{z}\frac{\partial}{\partial z}$$
\textbf{Operators}
\begin{table}[H]
\centering
\renewcommand{\arraystretch}{1.6}
\begin{tabularx}{\textwidth}{@{} l l >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X >{\raggedright\arraybackslash}X @{}}
\toprule
\textbf{Operator} & \textbf{Notation} & \textbf{Input$\to$Output} & \textbf{Physical Meaning} & \textbf{Maxwell/EM Example} \\
\midrule
Gradient &
$\nabla f$ &
Scalar $\to$ Vector &
Direction and rate of maximum spatial change &
$E = -\nabla\phi$ - Field flows down potential slope \\

Divergence &
$\nabla.V$ &
Vector $\to$ Scalar &
Net spatial outflow(source) or inflow(sink) at a point &
$\nabla.E = \dfrac{\rho}{\epsilon_0}$ - Electric charges create flux divergence \\

Curl &
$\nabla\times V$ &
Vector $\to$ Vector &
Local circulation or rotational density &
$\nabla\times B = \mu_0 J + \mu_0\epsilon_0\dfrac{\partial E}{\partial t}$ - Circulation driven by currents/fields \\

Laplacian &
$\nabla^2 f$ &
Scalar $\to$ Scalar &
Spatial curvature or deviation from local average &
$\nabla^2 \Phi = -\dfrac{\rho}{\epsilon_0}$ (Poisson's equation for potential) \\

Vector Laplacian &
$\nabla^2V$ &
Vector $\to$ Vector &
Spatial Laplacian evaluated on each component &
$\nabla^2A - \dfrac{1}{c^2}\dfrac{\partial^2A}{\partial t^2} = -\mu_0 J$ - Wave equation \\
\bottomrule
\end{tabularx}
\end{table}
\textbf{Vector Identities}
\begin{enumerate}
    \item Curl of gradient is always 0
    $$\nabla\times(\nabla f)\ =\ 0$$
    \item Divergence of curl is always 0
    $$\nabla.(\nabla\times V)\ =\ 0$$
    \item Curl of curl(wave eqn)
    $$\nabla\times(\nabla\times V)\ =\ \nabla(\nabla.V)-\nabla^2V$$
    \item Advection \& magnetic force term
    $$V\times(\nabla\times V)\ =\ \frac{1}{2}\nabla(V.V)-(V.\nabla)V$$
\end{enumerate}
\hrule`,
  },
  {
    id: "25",
    title: "Quiver Velocity",
    content: String.raw`\subsection*{Quiver Velocity}
Instantaneous, oscillatory velocity acquired by charged particles driven back \& forth by oscillating electric field of EM wave - $v_{osc}=v_q$.
\newline
Consider free $e^-$ in linearly polarized field($E=E_0cos(\omega t)$). Non-relativistic eqn of motion becomes:
$$m\frac{dv}{dt}\ =\ -eE(t)\ =\ -eE_0cos(\omega t)$$
$$\text{v}_q=-\frac{e}{m\omega}sin(\omega t)$$
$$\int \text{v}_q=r_q=-\frac{e}{m\omega^2}cos(\omega t)$$
Amplitude of oscillatory velocity is $\text{v}_q$ and it's integral($\text{r}_q$) is quiver displacement/radius.
$$\frac{\text{v}_q}{c}=\frac{eE_0}{m\omega c}\equiv a_0$$
\begin{itemize}
    \item $a_0<<1$: quiver is at low v.
    \item $a_0\approx1$: quiver reaches c.
    \item $a_0>>1$: v$_q$ cannot exceed c. Quiver momentum grows linearly with field strength.
\end{itemize}
$$p_q=\gamma m\text{v}_q\to\ \text{v}_q=\frac{p_q}{\gamma m}=a_0c$$
\begin{itemize}
    \item $a_0<<1$: v$_q~c\propto E$ - linear scaling with E.
    \item $a_0>>1$: v$_q\to c$ - momentum and $\gamma$ continue to scale with $a_0$.
\end{itemize}
\textbf{Time Averaging}
\newline
When an $e^-$ undergoes quiver in oscillating field, it's instantaneous velocity is -
$$\text{v}(t)=-\frac{eE_0}{m\omega}sin(\omega t)=-\text{v}_qsin(\omega t)$$
$$\text{Time averaging}\ \to\ \langle f(t)\rangle=\frac{1}{T}\int_0^Tf(t)dt$$
\begin{itemize}
    \item 1st order time avg - Mean Drift Velocity($\langle \text{v}\rangle$)
    $$\langle \text{v}\rangle\ =\ -\text{v}_q\frac{1}{T}\int_0^Tsin(\omega t)dt = -\text{v}_q\times0 =\ 0$$
    $\therefore\ e^-$ exhibits no spatial translation from linear quiver motion.
    \item 2nd order time avg - Quiver KE($\langle\text{v}^2\rangle$)
    $$\text{v}^2(t)=\text{v}_qsin^2(\omega t)=\text{v}_q\frac{1-cos(2\omega t)}{2}$$
    $$\langle\text{v}^2\rangle=\text{v}_q^2\frac{1}T{\int_0^T\bigg(\frac{1-cos(2\omega t)}{2}\bigg)dt}=\text{v}_q^2.\frac{1}2{}$$
    $$\text{v}^2\ =\ \frac{1}{2}\frac{e^2E_0^2}{m^2\omega^2}$$
    This non-zero 2nd order average defines the cycle averaged KE of oscillation as - 
    $$\langle KE\rangle = \frac{1}{2}m\langle\text{v}^2\rangle=\frac{e^2E_0^2}{4m\omega^2}\equiv-\nabla\Phi$$
    $$F_P=-\nabla\langle KE\rangle=-\nabla\Phi$$
\end{itemize}
\hrule
`,
  },
  {
    id: "26",
    title: "Plasma Density",
    content: String.raw`
    \subsection*{Plasma Density}
Whether an EM wave propagates or reflects when interacting with plasma depends on the electron density($n_e$) relative to the laser freq($\omega_0$). The boundary is defined by critical density($n_c$). Wave propagation follows dispersion relation:
$$\omega_0^2=\omega_p^2+k^2c^2\text{ where }\omega_p=\sqrt{\frac{n_ee^2}{m_e\epsilon_0}}$$
Solving for wave number - $k=\frac{\omega}{c}\sqrt{1-\frac{\omega_p^2}{\omega_0^2}}=\frac{\omega}{c}\sqrt{1-\frac{n_e}{n_c}}$
Critical density occurs when $\omega_0=\omega_p$
$$n_c=\frac{\epsilon_0m\omega_0^2}{e^2}=\frac{\pi mc^2}{e^2\lambda_0^2}\approx\frac{1.1\times10^{21}}{\lambda_0^2[\mu m]}cm^{-3}$$
\textbf{Regimes}
\begin{enumerate}
    \item Underdense
    \begin{itemize}
        \item $n_e<n_c \to \omega_0>\omega_p$
        \item $n=ck/\omega\ \to\ O<n<1$ - real and positive
        \item Laser propagates through medium with $v_{ph}>c$ and $v_g<c$.
    \end{itemize}
    \item Overdense
    \begin{itemize}
        \item $n_e>n_c\to\omega_0<\omega_p$
        \item n is imaginary.
        \item k is purely imaginary. Light cannot propagate, leading to evanescent decay.
    \end{itemize}
    \item Critical
    \begin{itemize}
        \item $n_e=n_c\to\omega_0=\omega_p$
        \item n=0
        \item k$\to$0. Wave gets reflected.
    \end{itemize}
\end{enumerate}
\textbf{Summary}
\begin{itemize}
    \item In \textbf{underdense plasma}, the plasma acts as a low loss, dispersive dielectric medium capable of sustaining relativistic electron wakefields without reflecting the laser driver.
    \item In \textbf{overdense plasma}, free electrons oscillate rapidly enough to shield the laser electric field within a skin depth, leading to reflection.
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

  // 2. Parse LaTeX tabular environments
  text = text.replace(
    /\\begin\{table\}(\[.*?\])?([\s\S]*?)\\end\{table\}/g,
    (_, __, inner) => {
      let tableHtml = inner.replace(
        /\\begin\{tabularx\}\{.*?\}\{.*?\}/g,
        "<table><tr><td>",
      );
      tableHtml = tableHtml.replace(
        /\\begin\{tabular\}\{.*?\}/g,
        "<table><tr><td>",
      );
      tableHtml = tableHtml.replace(
        /\\end\{tabularx\}|\\end\{tabular\}/g,
        "</td></tr></table>",
      );
      tableHtml = tableHtml.replace(
        /\\toprule|\\midrule|\\bottomrule|\\hline/g,
        "",
      );
      tableHtml = tableHtml.replace(/\\\\/g, "</td></tr><tr><td>");
      tableHtml = tableHtml.replace(/&/g, "</td><td>");
      return tableHtml;
    },
  );

  text = text.replace(/<table>[\s\S]*?<\/table>/g, protect);

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

  // 9. Restore protected math blocks
  text = text.replace(
    /%%%BLOCK_(\d+)%%%/g,
    (_, id) => protectedBlocks[Number(id)],
  );

  target.innerHTML = text;

  // 10. MathJax typeset re-run
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetClear([target]);
    MathJax.typesetPromise([target]).catch((err) =>
      console.warn("MathJax err:", err),
    );
  }
}
