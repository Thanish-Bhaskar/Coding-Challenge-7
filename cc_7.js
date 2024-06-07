//U08201790
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Validate form fields
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    if (!name || !rating || !comments) {
        alert('Please fill out all fields.');
        return;
    }

    // Append feedback to the display area
    const feedbackDisplay = document.getElementById('feedbackDisplay');
    const feedback = document.createElement('div');
    feedback.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        <hr>
    `;
    feedbackDisplay.appendChild(feedback);

    // Clear the form fields
    document.getElementById('feedbackForm').reset();
});
