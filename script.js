function myFunc() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailWarning = document.getElementById("email-warning");
  const passwordWarning = document.getElementById("password-warning");

  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailWarning.classList.add("hidden");
  } else {
    emailWarning.classList.remove("hidden");
  }

  if (password.length >= 8) {
    passwordWarning.classList.add("hidden");
    document.getElementById("validEP").classList.remove("hidden");
  } else {
    passwordWarning.classList.remove("hidden");
  }
}

// Handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default submit for custom behavior

  const confirmed = confirm("Are you sure you want to submit?");

  if (confirmed) {
    alert("Successful signup!");
    // You can submit the form to a server here if needed
  } else {
    // Clear inputs and reload the page
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    location.reload();
  }
});
