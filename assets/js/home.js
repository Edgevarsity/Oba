const searchInput = document.querySelector("#search-box");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const results = document.querySelector("#results");
const emptyState = document.querySelector("#emptyState");

const searchableItems = [
  {
    title: "Story Books",
    description: "Browse story books",
    url: "/pages/store/shop/shop.html",
    keywords: "book books story stories reading",
  },
  {
    title: "Watch Videos",
    description: "Browse videos and tutorials",
    url: "/pages/learning/videos/video.html",
    keywords: "video videos watch tutorial tutorials",
  },
];

function searchPages() {
  const query = searchInput.value.trim().toLowerCase();
  results.replaceChildren();

  if (!query) {
    emptyState.hidden = true;
    return;
  }

  const matches = searchableItems.filter((item) => {
    const searchableText =
      `${item.title} ${item.description} ${item.keywords}`.toLowerCase();

    return query.split(/\s+/).every((word) => searchableText.includes(word));
  });

  for (const item of matches) {
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = `${item.title} — ${item.description}`;
    results.append(link);
  }

  emptyState.hidden = matches.length > 0;
}

searchInput.addEventListener("input", searchPages);
searchButton.addEventListener("click", searchPages);

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchPages();
  searchInput.focus();
});

searchInput.addEventListener("input", () => {
  clearButton.hidden = searchInput.value.length === 0;
});