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

  // 3. SEARCH AUTOCOMPLETE & NAVIGATION (TITLES + KEYWORDS)
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

      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(${escaped})`, "gi");

      // Match against both the topic title and the keywords array
      currentMatches = notesCatalog
        .map((item) => {
          const titleMatch = item.title.toLowerCase().includes(query);

          const matchedKeywords = Array.isArray(item.keywords)
            ? item.keywords.filter((kw) => kw.toLowerCase().includes(query))
            : [];

          if (!titleMatch && matchedKeywords.length === 0) {
            return null;
          }

          return {
            ...item,
            titleMatch,
            matchedKeywords,
            priority: titleMatch ? 1 : 2, // Title matches rank higher
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.priority - b.priority)
        .slice(0, 8); // Display top 8 results

      if (currentMatches.length === 0) {
        suggestionsBox.innerHTML = `<div class="suggestion-no-results">No topics found matching "${e.target.value}"</div>`;
        suggestionsBox.classList.add("show");
        return;
      }

      // Render suggestions list
      suggestionsBox.innerHTML = currentMatches
        .map((item, idx) => {
          const highlightedTitle = item.title.replace(regex, "<mark>$1</mark>");

          const tagsHtml =
            item.matchedKeywords.length > 0
              ? `<div class="suggestion-tags">
                  ${item.matchedKeywords
                    .map(
                      (kw) =>
                        `<span class="kw-tag">${kw.replace(regex, "<mark>$1</mark>")}</span>`,
                    )
                    .join("")}
                 </div>`
              : "";

          return `
            <div class="suggestion-item" data-index="${idx}" data-url="${item.url}">
              <div class="suggestion-item-top">
                <span class="suggestion-title">${highlightedTitle}</span>
                <span class="suggestion-badge">${item.page}</span>
              </div>
              ${tagsHtml}
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
          // Default to first match if Enter is pressed directly
          window.location.href = currentMatches[0].url;
        }
      } else if (e.key === "Escape") {
        suggestionsBox.classList.remove("show");
      }
    });

    // Mouse click selection
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
