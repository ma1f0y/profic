document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you ${name}, your message has been sent!`);
        // Optionally, you can add functionality to send the form data to an email service.
    } else {
        alert('Please fill in all fields.');
    }
});

// send msg to slack



