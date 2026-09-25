// Function to dynamically render the navigation bar
function loadNavbar(basePath = "") {
  const navbarHTML = `
    <nav class="global-navbar">
      <div class="nav-left">
        <a href="${basePath}Home/home.html" class="nav-brand">MTech Project Work</a>
      </div>
      <div class="nav-right">
        <a href="${basePath}Timeline/timeline_hz.html" class="nav-link">Timeline</a>
        <a href="${basePath}Notes/notes_home.html" class="nav-link">Notes Workspace</a>
        <a href="${basePath}Gallery/gallery.html" class="nav-link">Gallery</a>
      </div>
    </nav>
  `;

  // Prepend navbar into the container or at the top of the body
  const container =
    document.getElementById("navbar-container") || document.body;
  container.insertAdjacentHTML("afterbegin", navbarHTML);
}
