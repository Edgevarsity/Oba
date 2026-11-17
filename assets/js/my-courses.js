
const user = JSON.parse(sessionStorage.getItem("kotechUser") || "null");

if (!user) {
  window.location.href = "/pages/account/profile/account.html";
} else {
  document.getElementById("welcomeMessage").textContent =
    "Welcome, " + user.name + "!";

  const applications = JSON.parse(
    localStorage.getItem("kotechApplications") || "[]"
  );

  const myApplications = applications.filter(
    application => application.email.toLowerCase() === user.email.toLowerCase()
  );

  const list = document.getElementById("myCourseList");
  const empty = document.getElementById("noCourses");

  empty.hidden = myApplications.length > 0;

  myApplications.forEach(application => {
    const card = document.createElement("div");
    card.style.padding = "15px";
    card.style.marginTop = "15px";
    card.style.border = "1px solid #ddd";
    card.style.borderRadius = "8px";

    const title = document.createElement("h3");
    title.textContent = application.course;

    const status = document.createElement("p");
    status.textContent = "Application submitted";

    card.append(title, status);
    list.appendChild(card);
  });
}

document.getElementById("logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem("kotechUser");
  window.location.href = "/pages/account/profile/account.html";
});
