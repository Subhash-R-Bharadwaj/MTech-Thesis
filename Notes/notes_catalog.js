// Master registry of all topics across all note pages
const notesCatalog = [
  {
    title: "Average Power",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=7",
  },
  {
    title: "ADC - ADS1115",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "Arduino",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=74",
  },
  {
    title: "Beam Quality",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=8",
  },
  {
    title: "Beam Properties",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=12",
  },
  {
    title: "Beam Collimation Check",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=20",
  },
  {
    title: "Beam Hardening",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=58",
  },
  {
    title: "Beam Line",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=79",
  },
  {
    title: "Butter Paper",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=81",
  },
  {
    title: "Bellows",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=85",
  },
  {
    title: "CW-Pulsed Lasers",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=1",
  },
  {
    title: "Coherence - Measurement and Studies",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=19",
  },
  {
    title: "CXRO Database",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=38",
  },
  {
    title: "Convergence Graphs",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=51",
  },
  {
    title: "Current Phase",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=53",
  },
  {
    title: "Clean Rooms",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=55",
  },
  {
    title: "Compressor",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=86",
  },
  {
    title: "CPA",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=87",
  },
  {
    title: "Dual Op-Amp - LM358N",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "Diffraction Limit",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=44",
  },
  {
    title: "Detectors",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=49",
  },
  {
    title: "Discrepancy Principle",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=52",
  },
  {
    title: "Dipole",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=61",
  },
  {
    title: "Electron Temp and Significance",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=62",
  },
  {
    title: "Electron Spectrometer",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=26",
  },
  {
    title: "Electron Beam Optimization",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=34",
  },
  {
    title: "Electric Motors",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=67",
  },
  {
    title: "ESP32",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=75",
  },
  {
    title: "Filters",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=37",
  },
  {
    title: "Farfield Imaging",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=43",
  },
  {
    title: "Faraday's Law of Induction",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=68",
  },
  {
    title: "Fabry-Pèrot Cavity - Interferometer and Applications",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=71",
  },
  {
    title: "Flanges",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=85",
  },
  {
    title: "Gimbal Mounts",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=82",
  },
  {
    title: "Gauge Controller",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=89",
  },
  {
    title: "Harmonics - Low Order Harmonics, HHG",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=22",
  },
  {
    title: "Hall Probe",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "Intensity",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=9",
  },
  {
    title: "Interference",
    page: "June-July",
    url: "Jun_Jul/jun_jul.html?id=92",
  },
  {
    title: "Jitters",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=54",
  },
  {
    title: "K-Potentiometer",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "K-edge",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=37",
  },
  {
    title: "Lanex",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=27",
  },
  {
    title: "Limit Switches",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "Mode Locking",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=3",
  },
  {
    title: "MOSFET - IRF540",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "Microcontrollers",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=73",
  },
  {
    title: "Nonlinearity",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=15",
  },
  {
    title: "Oscilloscope",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=70",
  },
  {
    title: "Pulse Laser",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=1",
  },
  {
    title: "Pulse Energy",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=5",
  },
  {
    title: "Pulse Peak Power",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=6",
  },
  {
    title: "Pulse Duration Measurement",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=10",
  },
  {
    title: "Profiles",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=11",
  },
  {
    title: "Plasmons",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=16",
  },
  {
    title: "Pre-Pulse and Pedestal",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=25",
  },
  {
    title: "Poisson Statistics",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=60",
  },
  {
    title: "Plasma Density",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=64",
  },
  {
    title: "Plasma Length",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=66",
  },
  {
    title: "Plasma Gradient",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=65",
  },
  {
    title: "PID Error Correction",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=69",
  },
  {
    title: "Polarimeter",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=88",
  },
  {
    title: "Perspex",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=91",
  },
  {
    title: "Q-Switching",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=2",
  },
  {
    title: "Regulator - 7805",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "Ross Pairs",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=39",
  },
  {
    title: "R2D2 Chamber",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=84",
  },
  {
    title: "Synchronous Beam",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=13",
  },
  {
    title: "Stepper Motor",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "Stepper Motor Driver - A4988",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=28",
  },
  {
    title: "Spectral Unfolding",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=41",
  },
  {
    title: "Spectral Reconstruction",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=59",
  },
  {
    title: "TPD",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=16",
  },
  {
    title: "Transition Edge Sensor",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=36",
  },
  {
    title: "Thermal Lensing",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=76",
  },
  {
    title: "Turbo Molecular Pump",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=83",
  },
  {
    title: "Vacuum",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=78",
  },
  {
    title: "Wavefront",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=21",
  },
  {
    title: "Wakefield Injection",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=77",
  },
  {
    title: "X-Ray HSI",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=33",
  },
  {
    title: "X-Ray Broadband Spectrum Separation",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=35",
  },
  {
    title: "X-Ray Spectrum Diagnosis",
    page: "June - July",
    url: "Jun_Jul/jun_jul.html?id=50",
  },
  // Aug-Sep
  {
    title: "Allied vision camera",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=10",
  },
  {
    title: "Beam shaft coupler - ESM comp",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=6",
  },
  {
    title: "Beam splitters",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=4",
  },
  {
    title: "Bearing blocks(flanges, ball, pillow) - ESM comp",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=6",
  },
  {
    title: "Coherent Astrella",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=8",
  },
  {
    title: "Collar",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=6",
  },
  {
    title: "Dichroic mirrors",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=4",
  },
  {
    title: "Dielectric mirrors",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=3",
  },
  {
    title: "Diffraction gratings",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=5",
  },
  {
    title: "EM waves - principles and equations",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=19",
  },
  {
    title: "Feedthroughs",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=1",
  },
  {
    title: "Ferrule",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=1",
  },
  {
    title: "Fleming's left hand rule",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=17",
  },
  {
    title: "Hex screws",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=7",
  },
  {
    title: "Kerr effect",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=21",
  },
  {
    title: "Laser DOF",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=15",
  },
  {
    title: "Lead screw - ESM comp",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=6",
  },
  {
    title: "Lorentz force",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=16",
  },
  {
    title: "OAP",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=2",
  },
  {
    title: "Optics",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=1",
  },
  {
    title: "Pb uses in labs against radiation",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=14",
  },
  {
    title: "Pirani gauge",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=1",
  },
  {
    title: "Plasma density",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=26",
  },
  {
    title: "PoE ethernet switch",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=11",
  },
  {
    title: "Polyethylene sheets",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=12",
  },
  {
    title: "Ponderomotive force",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=23",
  },
  {
    title: "Potentials - scalar electric potential, magnetic vector potential",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=20",
  },
  {
    title: "PTFE flexible pipes",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=13",
  },
  {
    title: "Pump beams for oscillator/amplifiers",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=9",
  },
  {
    title: "Relativistic physics",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=18",
  },
  {
    title: "Self-focusing",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=22",
  },
  {
    title: "Vector calculus operators",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=24",
  },
  {
    title: "Vimba",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=10",
  },
  {
    title: "Liquid Targets in LPI",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=27",
  },
  {
    title: "Optical Masks",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=28",
  },
  {
    title: "Beam Splitters",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=29",
  },
  {
    title: "Mask vs BS",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=30",
  },
  {
    title: "Delay, Delay Lines",
    page: "August - September",
    url: "Aug_Sep/aug_sep.html?id=31",
  },
];
