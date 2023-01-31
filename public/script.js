const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = document.querySelector("#newUsername").value.trim();
  const passWord = document.querySelector("#newPassword").value.trim();
  fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({ username: userName, password: passWord }),
    headers: { "Content-Type": "application/json" },
  });
});

signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = document.querySelector("#newUsername").value.trim();
  const passWord = document.querySelector("#newPassword").value.trim();
  fetch("/api/user/create", {
    method: "POST",
    body: JSON.stringify({ username: userName, password: passWord }),
    headers: { "Content-Type": "application/json" },
  });
});
