// Dictionary holding customizable content for each timeline event
const eventDictionary = {
  phase1: {
    date: "Phase 1",
    title: "Literature Review & Theory",
    content: `
      <p>Initial survey of foundational papers finalized the thesis scope for relativistic modeling.</p>
      <div class="math-block">
        $$\\frac{d\\mathbf{p}}{dt} = -e \\left( \\mathbf{E} + \\mathbf{v} \\times \\mathbf{B} \\right)$$
      </div>
      <p>Where $\\mathbf{p} = \\gamma m_e \\mathbf{v}$ represents the relativistic momentum and $\\gamma$ is the Lorentz factor.</p>
    `,
  },
  phase2: {
    date: "Phase 2",
    title: "Setup & Alignment",
    content: `
      <p>Configured the optical benches and completed the alignment of the dual-axis mirror drivers.</p>
      <ul>
        <li>Laser wakefield electron acceleration preparation.</li>
        <li>Vacuum chamber integration.</li>
      </ul>
      <figure class="content-figure">
        <img src="overview1.jpeg" alt="Setup Figure 1" class="content-img" onerror="this.style.display = 'none'" />
        <figcaption>Interaction geometry inside the chamber.</figcaption>
      </figure>
    `,
  },
  phase3: {
    date: "Phase 3",
    title: "Data Acquisition",
    content: `
      <p>Initiated data runs mapping the magnetic field of the dipole spectrometer. Real-time feedback loop enabled for beam stabilization.</p>
    `,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const modal = document.getElementById("eventModal");
  const modalClose = document.getElementById("eventModalClose");

  const modalDate = document.getElementById("modalDate");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  // Open modal and inject specific event data
  timelineItems.forEach((item) => {
    item.addEventListener("click", () => {
      const eventId = item.getAttribute("data-event-id");
      const data = eventDictionary[eventId];

      if (data) {
        modalDate.textContent = data.date;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.content;

        // Render LaTeX dynamically if it exists in the injected content
        if (window.MathJax && window.MathJax.typesetPromise) {
          window.MathJax.typesetPromise([modalBody]);
        }

        modal.classList.add("active");
      }
    });
  });

  // Modal close handlers
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
});
