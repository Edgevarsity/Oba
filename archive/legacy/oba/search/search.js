
function performSearch() {
  const q = searchInput.value.trim().toLowerCase();
  const matches = items.filter(i => (activeCategory === "all" || i.category === activeCategory) &&
    `${i.name} ${i.description} ${i.category}`.toLowerCase().includes(q));
  results.innerHTML = matches.length ? matches.map(i =>
    `<article class="result-card"><h3>${i.name}</h3><p>${i.description}</p><span>${i.category}</span></article>`).join("")
    : "<p>No results found.</p>";
}



