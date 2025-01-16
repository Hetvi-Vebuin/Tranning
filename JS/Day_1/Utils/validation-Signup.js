document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const conPass = document.getElementById('confirmPassword').value;

    // All field should not be empty
    if (!email || !pass || !conPass) {
        alert("Please enter Email, Password, and Confirm Password.");
        return;
    }
    // Password Length
    if (pass.length < 8) {
        alert("Password length must be at least 8 characters.");
        return;
    }
    // Password doesn't match
    if (pass !== conPass) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // already exists
    if (users.some(user => user.email === email)) {
        alert("Email already registered. Please log in.");
        return;
    }
    // new user entered in Local storage
    users.push({ email, pass });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please log in.");
    this.reset();
});
