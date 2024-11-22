function navigateTo(page) {
    window.location.href = page;
}

const users = {
    'srinidhi': '1234',
    'harini': '5678',
    'admin': 'adminpass'
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (users[username] && users[username] === password) {
        // Redirect to the main page if login is successful
        window.location.href = 'index.html';
    } else {
        // Display invalid user message
        messageElement.textContent = 'Invalid user or password';
        messageElement.style.color = 'red';
    }
}
