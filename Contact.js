document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("text").value;
        const message = document.getElementById("message").value;
        const responseMessage = document.getElementById("responseMessage");

        // Check if any field is empty
        if (!name || !email || !subject || !message) {
            alert("All fields are required.");
            return;
        }

        // If all fields have values, show success message in the div
        responseMessage.style.color = "green";
        responseMessage.textContent = "Your form has been submitted successfully!";
        this.reset(); // Clear the form fields after submission
    });
});
