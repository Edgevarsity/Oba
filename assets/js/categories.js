
const params = new URLSearchParams(window.location.search);

const initialCategory = params.get("category");
const initialSearch = params.get("search");

if (["coding", "design", "all"].includes(initialCategory)) {
    categoryFilter.value = initialCategory;
}

if (initialSearch) {
    courseSearch.value = initialSearch;
}

filterCourses();
