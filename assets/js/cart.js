
const cartItems = document.getElementById("cartItems");
const total = document.getElementById("total");
const bookCount = document.getElementById("bookCount");
const checkoutBtn = document.getElementById("checkoutBtn");

const prices = {
    "Adventure Storybook": 2000,
        "HTML for Beginners": 3500,
    "CSS Storybook": 2500,
    "mathemtics textbook":5000
};

function showCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const prices = {
    "Adventure Storybook": 2000,
    "HTML for Beginners": 3500,
    "CSS Storybook": 2500,
    "mathemtics textbook":5000
};

    cartItems.replaceChildren();

    let totalPrice = 0;
    let totalBooks = 0;

    for (const name in cart) {
        const quantity = cart[name];
        const price = prices[name] || 0;

        if (!Number.isInteger(quantity) || quantity < 1) continue;

        totalBooks += quantity;
        totalPrice += quantity * price;

        const item = document.createElement("div");
        item.className = "item";

        const title = document.createElement("h3");
        title.textContent = name;

        const qty = document.createElement("p");
        qty.textContent = `Quantity ordered: ${quantity}`;

        const subtotal = document.createElement("p");
        subtotal.textContent =
            `Subtotal: ₦${(quantity * price).toLocaleString()}`;

        const minus = document.createElement("button");
        minus.textContent = "−";
        minus.onclick = () => changeQuantity(name, -1);

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.onclick = () => changeQuantity(name, 1);

        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.onclick = () => removeBook(name);

        item.append(title, qty, subtotal, minus, plus, remove);
        cartItems.appendChild(item);
    }

    if (totalBooks === 0) {
        cartItems.textContent = "Your cart is empty.";
    }

    total.textContent = `Total: ₦${totalPrice.toLocaleString()}`;
    bookCount.textContent =
        `${totalBooks} ${totalBooks === 1 ? "book" : "books"}`;
}



function changeQuantity(name, amount) {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const newQuantity = (cart[name] || 0) + amount;

    if (newQuantity < 1) {
        delete cart[name];
    } else {
        cart[name] = newQuantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

function removeBook(name) {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    delete cart[name];

    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

checkoutBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Your cart is ready! ");
});

showCart();
