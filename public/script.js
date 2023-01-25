const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");

const loginHandle = async (event) => {
  event.preventDefault();
  const userName = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
    headers: { "Content--Type": "application/json" },
  });
};

loginBtn.onclick = loginHandle;

const signUpHandle = async (event) => {
  event.preventDefault();
  const userName = document.querySelector("#newUsername").value.trim();
  const password = document.querySelector("#newPassword").value.trim();
  console.log(userName, password);
  fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
    headers: { "Content--Type": "application/json" },
  });
};

signUpBtn.onclick = signUpHandle;
