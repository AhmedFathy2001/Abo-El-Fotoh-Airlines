const signup = document.getElementById("signup");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("email");
const address = document.getElementById("address");
const country = document.getElementById("country");
const phone = document.getElementById("phone");

signup.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    username.value === "" ||
    password.value === "" ||
    confirmPassword.value === "" ||
    email.value === "" ||
    address.value === "" ||
    country.value === "" ||
    phone.value === ""
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
        email: email.value,
        address: address.value,
        country: country.value,
        phone: phone.value,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          window.location.href = "/auth.html";
        } else {
          alert("error");
        }
      })
      .catch((err) => alert(err.message));
  }
});
