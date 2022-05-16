const signup = document.getElementById("signup");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

signup.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    username.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    alert("Please fill in all fields");
  } else if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
  } else {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username.value,
        password: password.value,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/auth.html";
        } else {
          alert("Username already exists");
        }
      })
      .catch((err) => alert(err.message));
  }
});
