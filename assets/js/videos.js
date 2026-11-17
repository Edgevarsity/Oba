
const PAYSTACK_PAYMENT_LINK = "PASTE_YOUR_PAYMENT_LINK_HERE";

const MY_CHANNEL_LINK = "PASTE_YOUR_YOUTUBE_CHANNEL_LINK_HERE";

document.getElementById("myChannel").href = MY_CHANNEL_LINK;

document.getElementById("payButton").addEventListener("click", () => {
  if (!PAYSTACK_PAYMENT_LINK.startsWith("https://")) {
    alert("The Kotech payment link has not been configured yet.");
    return;
  }

  window.location.href = PAYSTACK_PAYMENT_LINK;
});



const PAYMENT_LINK = "PASTE_YOUR_PAYSTACK_PAYMENT_LINK_HERE";

document.getElementById("payButton").addEventListener("click", () => {
  if (!PAYMENT_LINK.startsWith("https://")) {
    alert("Payment is not configured yet. Please contact Kotech.");
    return;
  }

  window.location.href = PAYMENT_LINK;
});
