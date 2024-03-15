document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Event listener for registering a new user
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        registerUser(username, password);
        registerForm.reset();
    });

    // Event listener for logging in
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        loginUser(username, password);
        loginForm.reset();
    });

    // Function to register a new user
    function registerUser(username, password) {
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error registering user:', error));
    }

    // Function to log in
    function loginUser(username, password) {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error logging in:', error));
    }
});


