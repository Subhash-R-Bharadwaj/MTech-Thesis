document.addEventListener("DOMContentLoaded", () => {
  // --- MODAL ELEMENTS ---
  const modal = document.getElementById("dictionaryModal");
  const openBtn = document.getElementById("openDictionaryBtn");
  const closeBtn = document.getElementById("closeDictionaryBtn");
  const listContainer = document.getElementById("dictionaryList");
  const alphaNav = document.getElementById("alphabetNav");
  const dictCount = document.getElementById("dictCount");

  // --- SEARCH ELEMENTS ---
  const searchInput = document.getElementById("notesSearch");
  const suggestionsBox = document.getElementById("searchSuggestions");
  let activeIndex = -1;
  let currentMatches = [];

  // 1. DICTIONARY MODAL HANDLERS
  if (openBtn) {
    openBtn.addEventListener("click", () => modal.classList.add("active"));
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  // 2. RENDER ALPHABETICAL DICTIONARY
  if (typeof notesCatalog !== "undefined" && notesCatalog.length > 0) {
    if (dictCount) dictCount.textContent = `(${notesCatalog.length} topics)`;

    const sorted = [...notesCatalog].sort((a, b) =>
      a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
    );

    const grouped = {};
    sorted.forEach((item) => {
      const letter = item.title.trim()[0].toUpperCase();
      const key = /[A-Z]/.test(letter) ? letter : "#";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");
    if (alphaNav) {
      alphaNav.innerHTML = alphabet
        .map((letter) => {
          if (grouped[letter]) {
            return `<a href="#alpha-${letter}" class="alpha-link">${letter}</a>`;
          }
          return `<span class="alpha-link disabled">${letter}</span>`;
        })
        .join("");
    }

    if (listContainer) {
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
  }

  // 3. SEARCH AUTOCOMPLETE & NAVIGATION
  if (searchInput && suggestionsBox && typeof notesCatalog !== "undefined") {
    // Filter matches on user keystroke
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      activeIndex = -1;

      if (!query) {
        suggestionsBox.classList.remove("show");
        suggestionsBox.innerHTML = "";
        currentMatches = [];
        return;
      }

      currentMatches = notesCatalog.filter((item) =>
        item.title.toLowerCase().includes(query),
      );

      if (currentMatches.length === 0) {
        suggestionsBox.innerHTML = `<div class="suggestion-no-results">No topics found matching "${e.target.value}"</div>`;
        suggestionsBox.classList.add("show");
        return;
      }

      // Highlight matched characters in the dropdown
      suggestionsBox.innerHTML = currentMatches
        .map((item, idx) => {
          const regex = new RegExp(
            `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
            "gi",
          );
          const highlightedTitle = item.title.replace(regex, "<mark>$1</mark>");

          return `
            <div class="suggestion-item" data-index="${idx}" data-url="${item.url}">
              <span>${highlightedTitle}</span>
              <span class="suggestion-badge">${item.page}</span>
            </div>
          `;
        })
        .join("");

      suggestionsBox.classList.add("show");
    });

    // Keyboard navigation: Arrow Up, Arrow Down, Enter, Escape
    searchInput.addEventListener("keydown", (e) => {
      const items = suggestionsBox.querySelectorAll(".suggestion-item");
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % items.length;
        updateActiveItem(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        updateActiveItem(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (activeIndex >= 0 && currentMatches[activeIndex]) {
          window.location.href = currentMatches[activeIndex].url;
        } else if (currentMatches.length > 0) {
          // If Enter is pressed without using arrows, jump to first suggestion
          window.location.href = currentMatches[0].url;
        }
      } else if (e.key === "Escape") {
        suggestionsBox.classList.remove("show");
      }
    });

    // Click handler for mouse selection
    suggestionsBox.addEventListener("click", (e) => {
      const itemEl = e.target.closest(".suggestion-item");
      if (itemEl && itemEl.dataset.url) {
        window.location.href = itemEl.dataset.url;
      }
    });

    // Close suggestions dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !searchInput.contains(e.target) &&
        !suggestionsBox.contains(e.target)
      ) {
        suggestionsBox.classList.remove("show");
      }
    });
  }

  function updateActiveItem(items) {
    items.forEach((item, idx) => {
      if (idx === activeIndex) {
        item.classList.add("active");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("active");
      }
    });
  }
});
