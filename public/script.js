const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");

const loginHandle = async (event) => {
  event.preventDefault();
  const userName = document.querySelector("#username").value.trim();
  const passWord = document.querySelector("#password").value.trim();
  fetch("/api/user/login", {
    method: "POST",
    body: { username: userName, password: passWord },
  });
};

loginBtn.onclick = loginHandle;

const signUpHandle = async (event) => {
  event.preventDefault();
  const userName = document.querySelector("#newUsername").value.trim();
  const passWord = document.querySelector("#newPassword").value.trim();
  fetch("/api/user/create", {
    method: "POST",
    body: { username: userName, password: passWord },
  });
};

signUpBtn.onclick = signUpHandle;
