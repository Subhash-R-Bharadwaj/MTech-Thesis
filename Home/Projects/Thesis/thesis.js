document.addEventListener("DOMContentLoaded", () => {
  const photoGrid = document.getElementById("photoGrid");
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImg");
  const modalClose = document.getElementById("modalClose");

  if (photoGrid && modal && modalImg) {
    // Open modal on image click
    photoGrid.addEventListener("click", (e) => {
      const img = e.target.closest("img");
      if (img) {
        modalImg.src = img.src;
        modal.classList.add("active");
      }
    });

    // Close on 'x' button click
    if (modalClose) {
      modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    }

    // Close on clicking backdrop
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
      }
    });
  }
});
