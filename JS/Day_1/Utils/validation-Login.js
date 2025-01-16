document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    // Both email and enter should be there
    if (!email || !pass) {
        alert("Please enter Email and Password.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email);

    // User data should be there in local storage
    if (!user) {
        alert("User not found. Please sign up.");
        return;
    }

    // Password correct or Not
    if (user.pass === pass) { 
        alert("Login successful!");
        window.location.href = "../index.html";
    } else {
        alert("Invalid password. Please try again.");
    }
});
