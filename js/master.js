const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const message = document.getElementById("message");
const username = document.getElementById("name");
let members = localStorage.getItem("members")
  ? JSON.parse(localStorage.getItem("members"))
  : [];
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (valid(email.value, password.value) == true) {
    if (login(email.value, password.value) == true) {
      let user = getData(email.value, password.value);
      localStorage.setItem("auth", user.email);
      localStorage.setItem("username", user.name);
      window.location.pathname = "Login-System/Pages/Home.html";
    } else {
      message.innerHTML = `<span class="text-danger">Wrong password or email</span>`;
    }
  }
});
function valid(email, password) {
  let valid = false;
  if (email.length > 0 && password.length > 0) {
    valid = true;
  } else {
    message.innerHTML = `<span class="text-danger">All inputs is required</span>`;
  }
  return valid;
}

function login(email, password) {
  let check = false;
  members.forEach((element) => {
    element.email == email && element.pass == password ? (check = true) : "";
  });

  return check;
}

function getData(email, password) {
  let member;
  members.forEach((element) => {
    if (element.email == email && element.pass == password) {
      member = element;
    }
  });
  return member;
}
