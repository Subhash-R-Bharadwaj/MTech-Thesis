const timelineEvents = [
  {
    id: 35,
    date: "15/09/2026 - 25/09/2026",
    title: "Paper Review and Presentation",
    content: "Propagation of EM waves in plasma, Ponderomotive force, Linear plasma waves, Wakefield generation, etc., No practical/experimental work in this time. Only reading up and making notes. Presentations are very interesting and fun - to be able to discuss and understand physics of LWFA."
  }
  {
    id: 34,
    date: "10/09/2026",
    title: "ICPP Abstract and Presentation Paper",
    content:
      "Submitted abstract for ICPP titled '3D Magnetic Mapping and Trajectory Simulation of Electron Spectrometer for High Repition Rate Laser Plasma Interaction'. Finalized on one review paper for presentation. Mukesh and Tamanna will be presenting another bigger review article together.",
  },
  {
    id: 33,
    date: "08/09/2026",
    title: "CNC Stage Distance Calibration, Presentation Planning",
    content:
      "It was decided that Mukesh, Tamanna and I will read review articles on basics of LWFA and will present our understandings one dat each week from here on. Rakesh said he'll share papers. Did CNC stage distance calibration and verified using vernier.",
  },
  {
    id: 32,
    date: "07/09/2026",
    title: "ESM Correction and E50 Chamber Setup",
    content:
      "Iron housing wouldn't fir into Al stage. Ravi said time-averaging wasn't enough for the data plot I showed, need to map again. Gave it to workshop for correction. Mukesh, Tamanna and I cleaned the E50 chamber ports with water, soap and Isopropanol.",
  },
  {
    id: 31,
    date: "03/09/2026",
    title: "PW Lab Assembly",
    content:
      "Removed breadboards, turning chambers from packed boxes with Mukesh, Tamanna and Ameya.",
  },
  {
    id: 30,
    date: "02/09/2026",
    title: "Electron Trajectory Simulation",
    content:
      "Understood the math and did simulation of electron trajectory using Python for constant magnetic field and also varying magnetic field from interpolated data.",
  },
  {
    id: 29,
    date: "30/08/2026 - 01/09/2026",
    title: "Magnetic Field Mapping",
    content:
      "Using Gcode program, Gaussmeter, CNC stage performed magnetic field mapping. Intitally poles were not oriented properly - got both negative and positive values. Corrected that and got better dataset. Interpolated the data. Observed 154uSv radiation on dosimeter in the lab.",
  },
  {
    id: 28,
    date: "12/08/2026",
    title: "Beamline Setup",
    content:
      "Astrella beamline is ready using mirrors and focused using OAP. Saw plasma filament at high power setting.",
  },
  {
    id: 27,
    date: "11/08/2026",
    title: "Beam Image and Tracking",
    content:
      "Laser beam imaged using pinhole/aperture on camera. Motor movement shows motion of beam spot. Only single camera not enough for accurate centering and alignment. Abhisek explained usage of 2 camera setup for this project.",
  },
  {
    id: 26,
    date: "07/08/2026",
    title: "Camera + Mirror Integration",
    content:
      "Optimizing code and hardware. GOt IR laser, mount, ND filter to start alignment and correction.",
  },
  {
    id: 25,
    date: "05/08/2026 - 07/08/2026",
    title: "Vacuum Chamber Setup",
    content:
      "Dhrithsh and I cleaned, installed and connected VC to pump, Nitrogen cylinder. Did vacuum test and got 10^(-2)mbar",
  },
  {
    id: 24,
    date: "05/08/2026",
    title: "Camera Setup",
    content:
      "Got the Allied Vision camera. Looked up the camera information, downloaded and got used to the software and interface. Got to know about PoE, learnt more about camera and detectors. ",
  },
  {
    id: 23,
    date: "04/08/2026",
    title: "Mirror Side Ready",
    content:
      "Got another NANO, rewrote code for single Arduino and tested using only 1 motor-mirror assembly because ULNs were faulty. Python-Arduino comm looks good.",
  },
  {
    id: 22,
    date: "03/08/2026",
    title: "Astrella Laser",
    content:
      "Saw inside the laser assembly - pump chamber, stretcher, amplifier system, etc., Ravi & Abhisek asked a lot of questions - looking for answers.",
  },
  {
    id: 21,
    date: "03/08/2026",
    title: "Code working with mirrors",
    content:
      "Checked code with mirrors. Needed another NANO to operate another mirror but was told we can use analog pins in place of digital, so tried with that.\nSmoked the NANO - heard a small pop and smelled smoke, immediately turned off the power supplies. Maybe wiring/powering/ULN issue. Waiting for new NANO.",
  },
  {
    id: 20,
    date: "03/08/2026",
    title: "ESM Stage Components",
    content: "Stage components ready in workshop, assembly pending.",
  },
  {
    id: 19,
    date: "27/07/2026 - 30/07/2026",
    title: "TIFR - Mumbai: PW/TW lab shifting",
    content:
      "Dismantling & packing of beamlines, vacuum chambers, compressors, perspex, bellows, flanges, feedthroughs. Got to know many new components used in high intensity laser labs.",
  },
  {
    id: 18,
    date: "25/07/2026",
    title: "Code working with motor",
    content:
      "Checked code with motor working as needed. Setup with mirrors & mounts pending.",
  },
  {
    id: 17,
    date: "23/07/2026",
    title: "Code & Script Optimization for Mirror Alignment Project",
    content:
      "Finished Python script for 2 mirrors, both position & angle. Need to check with mirrors, cameras & laser beam.",
  },
  {
    id: 16,
    date: "23/07/2026",
    title: "Searching new problem statement?",
    content: "Reading about LPP challenges & applications.",
  },
  {
    id: 15,
    date: "21/07/2026",
    title: "Centroid detection",
    content:
      "Understood logic of centroid live tracking using python & laptop camera. Used hbr for laptop. Need grayscale to measure intensity. Waiting for cameras & motor resolution.",
  },
  {
    id: 14,
    date: "17/07/2026",
    title: "Expectation-Maximization",
    content:
      "ML based algorithm.\nReading papers, watching videos. Not able to understand yet. Fair idea of EM from coin-probability problem, but need to relate to spectrum reconstruction.",
  },
  {
    id: 13,
    date: "17/07/2026",
    title: "Mirror alignment project - connection flaws, code & hardware",
    content:
      "Slightly understood logic, py-script & Arduino code. New py-libraries, fns, etc., New components, 3D printed models. Waiting for lab to get ready to fix mirrors & start alignment.",
  },
  {
    id: 12,
    date: "15/07/2026",
    title: "Iterative Reconstruction",
    content:
      "NNLS, EM, Kramer's Law, Richardson-Lucy method. NNLS is basic algebra, rest are stats methods. Need to read up papers on accurate spectrum reconstruction.",
  },
  {
    id: 11,
    date: "15/07/2026",
    title: "Spectral Unfolding",
    content:
      "Matrix inversion problem cannot do inverse directly. Underdetermined system",
  },
  {
    id: 10,
    date: "14/07/2026",
    title: "Mirror alignment for far-field imaging",
    content:
      "Project that Srivatsa was working on. Attach motors to mirror posts. Python-Arduino-motor comms to center laser beam to reference point(camera center).",
  },
  {
    id: 9,
    date: "13/07/2026",
    title: "Hyperspectral Data Cube",
    content: "Image-processing, pixel-by-pixel data processing.",
  },
  {
    id: 8,
    date: "13/07/2026",
    title: "Ross Pairs",
    content:
      "Use K-edges, subtract to get bandpass. \nCan find a more direct method as subtraction loses most data.",
  },
  {
    id: 7,
    date: "07/07/2026",
    title: "Filters",
    content: "CXRO database, 10-30 keV, different thicknesses, K-edges.",
  },
  {
    id: 6,
    date: "06/07/2026",
    title: "X-Ray HSI",
    content:
      "Bremsstrahlung radiation. Optimize e- beam, separate broadband X-ray spectrum, filters / TES.",
  },
  {
    id: 5,
    date: "03/07/2026",
    title:
      "Project idea - Optimize LPI parameters to produce reproducible high energy e- beams with low energy spread & low emittance.",
    content: " Not very application based.",
  },
  {
    id: 4,
    date: "01/07/2026",
    title: "ESM Hall Probe Calibration",
    content:
      "Hall sensor + ADS1115 + IRF540 + LM358N + K-POT.\nHall sensor likely saturated. Couldn't figure out issue. Might be shorted somewhere.",
  },
  {
    id: 3,
    date: "26/06/2026",
    title: "Pre-pulse engineering & plasma gradient modelling",
    content: "No pre-pulse application anytime soon. Using pedestal only.",
  },
  {
    id: 2,
    date: "25/06/2026",
    title: "ESM stage movement",
    content:
      "Arduino + A4988 + motor.\nUnderstood components, logic. Wrote python script & Arduino code & tested for X-Axis. Waiting for stage dimensions from workshop & new A4988 drivers.",
  },
  {
    id: 1,
    date: "25/06/2026",
    title: "e- Beam & X-Ray Generation",
    content:
      "Laser-methanol/ethanol droplet interaction understanding.\nPapers & thesis reading: understanding underlying science, hardware, etc.",
  },
];

function renderPanoramic() {
  const track = document.getElementById("panoramicTrack");
  const viewport = document.getElementById("panoramicViewport");
  const tooltip = document.getElementById("eventTooltip");
  const tDate = document.getElementById("tooltipDate");
  const tTitle = document.getElementById("tooltipTitle");
  const tBody = document.getElementById("tooltipBody");

  // Render events along the highway (chronological: past on left -> newest on right)
  const ordered = [...timelineEvents].reverse();

  ordered.forEach((evt, idx) => {
    const isTop = idx % 2 === 0;

    const node = document.createElement("div");
    node.className = `panoramic-node ${isTop ? "pos-top" : "pos-bottom"}`;
    node.innerHTML = `
      <div class="node-card">
        <div class="node-date">${evt.date}</div>
        <div class="node-title">${evt.title}</div>
      </div>
      <div class="stem"></div>
      <div class="anchor-dot"></div>
    `;

    const card = node.querySelector(".node-card");
    card.addEventListener("mouseenter", () => {
      tDate.textContent = evt.date;
      tTitle.textContent = evt.title;
      tBody.textContent = evt.content;
      tooltip.style.display = "block";
    });

    card.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.clientX + 16}px`;
      tooltip.style.top = `${e.clientY + 16}px`;
    });

    card.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    track.appendChild(node);
  });

  // Enable vertical mouse-wheel to scroll horizontally
  viewport.addEventListener("wheel", (evt) => {
    if (evt.deltaY !== 0) {
      evt.preventDefault();
      viewport.scrollLeft += evt.deltaY * 1.5;
    }
  });
}

document.addEventListener("DOMContentLoaded", renderPanoramic);
