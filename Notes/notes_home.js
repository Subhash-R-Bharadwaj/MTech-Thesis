document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("dictionaryModal");
  const openBtn = document.getElementById("openDictionaryBtn");
  const closeBtn = document.getElementById("closeDictionaryBtn");
  const listContainer = document.getElementById("dictionaryList");
  const alphaNav = document.getElementById("alphabetNav");
  const dictCount = document.getElementById("dictCount");

  // 1. Open/Close Modal Handlers
  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  // 2. Render Alphabetical Dictionary
  if (typeof notesCatalog !== "undefined" && notesCatalog.length > 0) {
    dictCount.textContent = `(${notesCatalog.length} topics)`;

    // Sort alphabetically by topic title
    const sorted = [...notesCatalog].sort((a, b) =>
      a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
    );

    // Group topics by first letter
    const grouped = {};
    sorted.forEach((item) => {
      const letter = item.title.trim()[0].toUpperCase();
      const key = /[A-Z]/.test(letter) ? letter : "#";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });

    // Populate quick-jump alphabet navigation
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");
    alphaNav.innerHTML = alphabet
      .map((letter) => {
        if (grouped[letter]) {
          return `<a href="#alpha-${letter}" class="alpha-link">${letter}</a>`;
        }
        return `<span class="alpha-link disabled">${letter}</span>`;
      })
      .join("");

    // Populate alphabet tags and topics
    listContainer.innerHTML = Object.keys(grouped)
      .sort((a, b) => (a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b)))
      .map(
        (letter) => `
        <div class="alpha-group" id="alpha-${letter}">
          <div class="alpha-header">${letter}</div>
          <ul class="alpha-items">
            ${grouped[letter]
              .map(
                (topic) => `
              <li class="dict-entry">
                <a href="${topic.url}">${topic.title}</a>
                <span class="dict-badge">${topic.page}</span>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
      `,
      )
      .join("");
  }
});
