
const PAYMENT_LINK = "PASTE_YOUR_PAYSTACK_PAYMENT_LINK_HERE";
const MY_CHANNEL_LINK = "PASTE_YOUR_YOUTUBE_CHANNEL_LINK_HERE";

const channelLink = document.getElementById("myChannel");
if (channelLink && MY_CHANNEL_LINK.startsWith("https://")) {
  channelLink.href = MY_CHANNEL_LINK;
}

const payButton = document.getElementById("payButton");
if (payButton) {
  payButton.addEventListener("click", () => {
    if (!PAYMENT_LINK.startsWith("https://")) {
      alert("Payment is not configured yet. Please contact Kotech.");
      return;
    }

    window.location.href = PAYMENT_LINK;
  });
}
