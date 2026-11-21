const searchInput = document.querySelector("#search-box");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const suggestions = document.querySelector("#suggestions");
const results = document.querySelector("#results");
const emptyState = document.querySelector("#emptyState");

const searchableItems = [
  {
    title: "Story Books",
    description: "Browse educational and story books",
    url: "/pages/store/shop/shop.html",
    keywords: "book books story stories reading",
  },
  {
    title: "Watch Videos",
    description: "Watch coding tutorials",
    url: "/pages/learning/videos/video.html",
    keywords: "video videos watch tutorial tutorials",
  },
  {
    title: "HTML Course",
    description: "Learn HTML for beginners",
    url: "/pages/learning/courses/courses.html",
    keywords: "html coding website programming",
  },
  {
    title: "CSS Course",
    description: "Learn CSS and website styling",
    url: "/pages/learning/courses/courses.html",
    keywords: "css styling design",
  },
  {
    title: "JavaScript Course",
    description: "Learn JavaScript programming",
    url: "/pages/learning/courses/courses.html",
    keywords: "javascript js coding",
  },
  {
    title: "Graphic Design",
    description: "Learn graphic design",
    url: "/pages/learning/courses/courses.html",
    keywords: "graphic design poster",
  },
  {
    title: "Courses Applied",
    description: "View your course applications",
    url: "/pages/learning/courses/courses.html",
    keywords: "applied application my courses",
  },
  {
    title: "Student Account",
    description: "Visit your student account",
    url: "/pages/account/profile/account.html",
    keywords: "account login signup register student",
  },
];

function searchPages() {
  const query = searchInput.value.trim().toLowerCase();
  suggestions.replaceChildren();
  results.replaceChildren();
  clearButton.hidden = query.length === 0;

  if (!query) {
    suggestions.hidden = true;
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
    link.className = "suggestion";
    link.textContent = `${item.title} — ${item.description}`;
    suggestions.append(link);
  }

  suggestions.hidden = matches.length === 0;
  emptyState.hidden = matches.length > 0;
  if (matches.length === 0) {
    emptyState.textContent = "No topics found. Try another search.";
  }
}

searchInput.addEventListener("input", searchPages);
searchButton.addEventListener("click", searchPages);

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchPages();
  searchInput.focus();
});
