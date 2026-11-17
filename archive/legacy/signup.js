
const signupForm = document.getElementById("signupForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("signupMessage");

// Show and hide password
document.getElementById("showPassword").addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    confirmPassword.type = "text";
    document.getElementById("showPassword").textContent = "Hide";
  } else {
    password.type = "password";
    confirmPassword.type = "password";
    document.getElementById("showPassword").textContent = "Show";
  }
});

// Create account
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const passwordValue = password.value;
  const confirmValue = confirmPassword.value;

  if (passwordValue !== confirmValue) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  const accounts = JSON.parse(
    localStorage.getItem("kotechAccounts") || "[]"
  );

  const existingAccount = accounts.some(
    account => account.email === email
  );

  if (existingAccount) {
    message.textContent = "This email already has an account. Please log in.";
    message.style.color = "red";
    return;
  }

  accounts.push({
    name: name,
    email: email,
    password: passwordValue
  });

  localStorage.setItem("kotechAccounts", JSON.stringify(accounts));

  sessionStorage.setItem("kotechUser", JSON.stringify({
    name: name,
    email: email
  }));

  message.textContent = "Account created successfully!";
  message.style.color = "green";

  setTimeout(() => {
    window.location.href = "my-courses.html";
  }, 1000);
});
