// Add event listener to the get started button
document.querySelector('.hero button').addEventListener('click', () => {
    // Scroll to the features section
    document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the contact form
document.querySelector('.contact form').addEventListener('submit', (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Get the form data
    const formData = new FormData(e.target);
    // Send the form data to the server
    fetch('/contact', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});