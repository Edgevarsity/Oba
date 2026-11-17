
const cart = JSON.parse(localStorage.getItem("cart")) || {};

const prices = {
    "Adventure Storybook": 2000,
    "HTML for Beginners": 3500,
    "CSS Storybook": 2500,
    "mathemtics textbook":5000
};

const summary = document.getElementById("orderSummary");
const totalElement = document.getElementById("orderTotal");
const form = document.getElementById("checkoutForm");
const status = document.getElementById("status");

let total = 0;
let count = 0;

for (const name in cart) {
    const quantity = cart[name];
    const price = prices[name];

    if (!Number.isInteger(quantity) || quantity < 1 ||
        !Number.isFinite(price)) continue;

    total += price * quantity;
    count += quantity;

    const item = document.createElement("p");
    item.textContent =
        `${name} × ${quantity} = ₦${(price * quantity).toLocaleString()}`;

    summary.appendChild(item);
}

totalElement.textContent =
    `Total: ₦${total.toLocaleString()} (${count} books)`;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (count === 0) {
        status.textContent = "Your cart is empty.";
        return;
    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !phone || !address) {
        status.textContent = "Please complete all fields.";
        return;
    }

    const message =
        `Kotech Book Order\n` +
        `Customer: ${name}\n` +
        `Phone: ${phone}\n` +
        `Address: ${address}\n` +
        `Books: ${count}\n` +
        `Total: ₦${total.toLocaleString()}\n` +
        Object.entries(cart)
            .map(([book, qty]) => `${book} × ${qty}`)
            .join("\n");

    status.textContent =
        "your order is ready pls wait before it arrives.";

    console.log(message);
});
