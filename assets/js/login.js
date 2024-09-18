document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios.post('https://localhost:7049/api/Users', {
        email: email,
        password: password,
    })
    .then(function (response) {
        if (response.data.success) {
            const loginMessage = document.getElementById('login-message');
            loginMessage.innerHTML = '<h1 style="color: green;">Login Successful</h1>';
        } else {
            alert('Login failed. Please check your email and password.');
        }
    })
    .catch(function (error) {
        console.error(error);
        alert('An error occurred during login.');
    });
});
