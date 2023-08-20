document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate user input
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter a username and password.");
      return;
    }

    // Authenticate user
    if (username === "admin" && password === "admin") {
      // Redirect to admin panel
      window.location.href = "admin.html";
    } else {
      // Redirect to user panel
      window.location.href = "user.html";
    }
  });