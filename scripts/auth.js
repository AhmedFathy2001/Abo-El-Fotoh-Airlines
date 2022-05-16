const login = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");

login.addEventListener("click", (e) => {
  e.preventDefault();

  if (username.value === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    fetch("http://localhost:3000/users/login", {
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
          window.location.href = "/index.html";
        } else {
          alert("Username or password is incorrect");
        }
      })
      .catch((err) => alert(err.message));
  }
});
