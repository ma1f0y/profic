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

token = atob("eG94Yi03ODM0MjYyNTYwMDgyLTc4MzQyMDQ5NjYzNTUtWGwzOWEyOFRGUmtWaDhXYnZJRnhQR1FL")

const sendMsg = (msg, channel) => {
    fetch(`https://slack.com/api/chat.postMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            channel: channel,
            text: msg
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}
