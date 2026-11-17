
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("accountMessage");

document.getElementById("showRegister").addEventListener("click", () => {
  registerForm.hidden = false;
  loginForm.hidden = true;
  document.getElementById("showRegister").classList.add("active");
  document.getElementById("showLogin").classList.remove("active");
  message.textContent = "";
});

document.getElementById("showLogin").addEventListener("click", () => {
  registerForm.hidden = true;
  loginForm.hidden = false;
  document.getElementById("showLogin").classList.add("active");
  document.getElementById("showRegister").classList.remove("active");
  message.textContent = "";
});

function getAccounts() {
  return JSON.parse(localStorage.getItem("kotechAccounts") || "[]");
}

registerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const password = document.getElementById("registerPassword").value;

  const accounts = getAccounts();

  if (accounts.some(account => account.email === email)) {
    message.textContent = "This email already has an account. Please log in.";
    return;
  }

  accounts.push({ name, email, password });

  localStorage.setItem("kotechAccounts", JSON.stringify(accounts));

  sessionStorage.setItem("kotechUser", JSON.stringify({ name, email }));

  message.textContent = "Account created! Opening your courses...";

  setTimeout(() => {
    window.location.href = "/pages/learning/my-courses.html";
  }, 1000);
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const account = getAccounts().find(user =>
    user.email === email && user.password === password
  );

  if (!account) {
    message.textContent = "Incorrect email or password.";
    return;
  }

  sessionStorage.setItem("kotechUser", JSON.stringify({
    name: account.name,
    email: account.email
  }));

  message.textContent = "Login successful!";

  setTimeout(() => {
    window.location.href = "/pages/learning/courses/courses.html";
  }, 700);
});
