// capturing email and password

document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const emailText = emailField.value;
  //   console.log(emailText);
  // password
  const passField = document.getElementById("user-password");
  const passText = passField.value;
  //   console.log(passText);

  if (emailText == "sontan@baap.com" && passText == "secret") {
    window.location.href = "banking.html";
  }
});
