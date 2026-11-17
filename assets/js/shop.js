
const books = {
    "Adventure Storybook": 2000,
    "HTML for Beginners": 3500,
    "CSS Storybook": 2500, 
    "maths textbook": 3000
};

const prices = {
    "Adventure Storybook": 2000,
    "HTML for Beginners": 3500,
    "CSS Storybook": 2500,
    "maths textbook": 3000
};

const message = document.getElementById("message");
const search = document.getElementById("bookSearch");
const cards = document.querySelectorAll(".book-card");

function getCart() {
    try {
        return JSON.parse(localStorage.getItem("cart")) || {};
    } catch {
        return {};
    }
}

function updateCartCount() {
    const cart = getCart();

    const count = Object.values(cart).reduce((sum, quantity) => {
        return sum + (
            Number.isSafeInteger(quantity) && quantity > 0
                ? quantity
                : 0
        );
    }, 0);

    document.getElementById("cartCount").textContent = count;
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const quantityInput =
            document.getElementById(button.dataset.quantity);

        const quantity = Number(quantityInput.value);

        if (!Number.isInteger(quantity) ||
            quantity < 1 || quantity > 99) {
            message.textContent =
                "Please choose a quantity between 1 and 99.";
            return;
        }

        const cart = getCart();
        const newQuantity = (cart[name] || 0) + quantity;

        if (!Number.isSafeInteger(newQuantity) || newQuantity > 999) {
            message.textContent = "The quantity is too large.";
            return;
        }

        cart[name] = newQuantity;

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        message.textContent =
            `${quantity} × ${name} added to your cart!`;
    });
});

search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();

    cards.forEach(card => {
        card.hidden = !card.textContent.toLowerCase().includes(query);
    });
});

updateCartCount();
