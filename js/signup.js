const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const signUpBtn = document.querySelector("input[type='submit']");
const message = document.getElementById("message");
let members = localStorage.getItem("members")
  ? JSON.parse(localStorage.getItem("members"))
  : [];
signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  signUp();
});
function signUp() {
  let valid = validation(userName.value, userEmail.value, userPassword.value);
  if (valid == true) {
    register();
    message.innerHTML = `<span class="text-success">Success</span>`;
  } else {
    message.innerHTML = `<span class="text-danger"> ${valid}</span>`;
  }
}
function validation(name, email, password) {
  if (!name.length > 0 || !email.length > 0 || !password.length > 0) {
    return "All inputs is required";
  }
  if (validName(name) != true) {
    return validName(name);
  }
  if (validEmail(email) != true) {
    return validEmail(email);
  }
  if (validPass(password) != true) {
    return validPass(password);
  }
  return true;
}
function validEmail(email) {
  let regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gi;
  if (!email.match(regEmail)) {
    return "Email must be valid";
  } else {
    let exist = false;
    members.forEach((element) => {
      element.email == email ? (exist = true) : "";
    });
    if (exist) {
      return "Email already exist";
    }
    return true;
  }
}
function validName(name) {
  if (!(name.length >= 3)) {
    return "Name must be greater than 3 char";
  }
  return true;
}
function validPass(password) {
  if (!(password.length > 3 && password.length < 12)) {
    return "Password must be greater than 3 char and less than 12 char";
  }
  return true;
}
function register() {
  let member = {
    name: userName.value,
    email: userEmail.value,
    pass: userPassword.value,
  };
  members.push(member);
  localStorage.setItem("members", JSON.stringify(members));
  clearValues();
  goToLogin();
}
function goToLogin() {
  setTimeout(() => {
    window.location.pathname = "Login-System/index.html";
  }, 1000);
}
function clearValues() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
}
