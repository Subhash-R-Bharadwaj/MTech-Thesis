const timelineEvents = [
  {
    id: 19,
    date: "27/07/2026 - 30/07/2026",
    title: "TIFR - Mumbai: PW/TW lab shifting",
    content:
      "Dismantling & packing of beamlines, vacuum chambers, compressors, perspex, bellows, flanges, feedthroughs.",
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
    title: "Code & Script Optimization",
    content:
      "Finished Python script for 2 mirrors, both position & angle. Need to check with mirrors, cameras & laser beam.",
  },
  {
    id: 16,
    date: "23/07/2026",
    title: "New problem statement?",
    content: "Read about LPP challenges & applications.",
  },
  {
    id: 15,
    date: "21/07/2026",
    title: "Centroid detection",
    content:
      "Understood logic of centroid live tracking using python & laptop camera. Need grayscale to measure intensity. Waiting for cameras & motor resolution.",
  },
  {
    id: 14,
    date: "17/07/2026",
    title: "ML / Expectation-Maximization",
    content:
      "Reading papers, watching videos. Not able to understand yet. Fair idea of EM from coin-probability problem, but need to relate to spectrum reconstruction.",
  },
  {
    id: 13,
    date: "17/07/2026",
    title: "Connection flaws, code & 3D prints",
    content:
      "Slightly understood logic, py-script & Arduino code. New py-libraries, fas, etc. New components, 3D printed models. Waiting for lab to get ready to fix mirrors & start alignment.",
  },
  {
    id: 12,
    date: "15/07/2026",
    title: "Iterative Reconstruction",
    content:
      "NNLS, EM, Kramer's Law, Richardson-Lucy. NNLS is basic algebra, rest are stats methods. Needs papers on accurate spectrum reconstruction.",
  },
  {
    id: 11,
    date: "15/07/2026",
    title: "Spectral Unfolding",
    content:
      "Matrix inversion problem: S = M * I => I = M^-1 * S. Cannot do inverse directly.",
  },
  {
    id: 10,
    date: "14/07/2026",
    title: "Mirror alignment for far-field imaging",
    content:
      "Attach motors to mirror posts. Python-Arduino-motor comms to center laser beam to reference point (camera center).",
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
      "Use K-edges, subtract to get bandpass. On-hold. Wants a more direct method as subtraction loses most data.",
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
    date: "06/07/2026",
    title: "ESM Hall Probe Calibration",
    content:
      "Hall sensor + ADS1115 + IRF540 + LM358N + K-POT. Hall sensor calibrated? Couldn't figure out issue. Might be short-circuited somewhere.",
  },
  {
    id: 4,
    date: "03/07/2026",
    title: "Beam Dynamics & Engineering",
    content:
      "Optimize LPI parameters to produce reproducible high energy e- beams with low energy spread & low emittance. Not very application bound yet.",
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
    title: "e- Beam & X-Ray Generation",
    content:
      "Laser methanol/ethanol droplet interaction understanding. Papers & thesis reading; underlying science, hardware, etc.",
  },
  {
    id: 1,
    date: "25/06/2026",
    title: "ESM stage movement",
    content:
      "Arduino + A4988 + motor. Understood components, logic. Wrote python script & Arduino code & tested for X-Axis. Waiting for stage dimensions from workshop & new A4988 drivers.",
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
