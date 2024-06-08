const username = document.getElementById("name");
const logoutBtn = document.getElementById("logout");
class Auth {
  constructor() {
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);
  }
  validateAuth(auth) {
    let valid = false;
    let emails = localStorage.getItem("members")
      ? JSON.parse(localStorage.getItem("members"))
      : [];
    emails.forEach((element) => {
      element.email == auth ? (valid = true) : "";
    });
    if (valid) {
      username.innerHTML = `Welcome ${localStorage.getItem("username")}`;
    } else {
      window.location.pathname = "/index.html";
    }
  }

  logOut() {
    localStorage.removeItem("auth");
    window.location.pathname = "/index.html";
  }
}
let member = new Auth();
logoutBtn.addEventListener("click", function () {
  member.logOut();
});
