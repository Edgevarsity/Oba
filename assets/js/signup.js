
const signupForm = document.getElementById("signupForm");
const message = document.getElementById("signupMessage");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
    return;
  }

  const accounts = JSON.parse(
    localStorage.getItem("kotechAccounts") || "[]"
  );

  const existingAccount = accounts.find(
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
    password: password
  });

  localStorage.setItem("kotechAccounts", JSON.stringify(accounts));

  sessionStorage.setItem("kotechUser", JSON.stringify({
    name: name,
    email: email
  }));

  message.textContent = "Account created successfully!";
  message.style.color = "green";

  setTimeout(() => {
    window.location.href = "/pages/learning/courses/courses.html";
  }, 1000);
});
