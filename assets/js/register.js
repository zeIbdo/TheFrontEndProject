document.querySelector('.registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    const fullname = document.querySelector('#username').value;
    const email = document.querySelector('#Email').value;
    const password = document.querySelector('#Password').value;

    axios.post('https://localhost:7049/api/Users', {
        fullname: fullname,
        email: email,
        password: password,
        phoneNumber: "994",
    })
    .then(function (response) {
        alert('User registered successfully!');
        document.querySelector('#username').value = '';
        document.querySelector('#Email').value = '';
        document.querySelector('#Password').value = '';
    })
    .catch(function (error) {
        console.error(error);
        alert('Registration failed. Please try again.');
    });
});