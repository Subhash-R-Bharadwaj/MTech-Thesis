document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("galleryModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalVisual = document.getElementById("modalVisual");
  const cards = document.querySelectorAll(".gallery-card");

  // Open modal with card details
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.dataset.title;
      const desc = card.dataset.desc;
      const placeholderText =
        card.querySelector(".img-placeholder").textContent;

      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modalVisual.textContent = placeholderText;

      modal.style.display = "flex";
    });
  });

  // Close modal logic
  const hideModal = () => {
    modal.style.display = "none";
  };

  closeModal.addEventListener("click", hideModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      hideModal();
    }
  });
});
