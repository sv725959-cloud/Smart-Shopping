function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  localStorage.setItem("user", JSON.stringify({ name, email }));

  alert("Signup Successful!");
  window.location.href = "home.html";
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
