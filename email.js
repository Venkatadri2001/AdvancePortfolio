document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    emailjs.init("4C7lU9bjdBQTNCljQ"); // Replace with your EmailJS Public Key

    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Prepare email parameters
        let emailParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_kwcw0hu", "template_dsde9m5", emailParams)
            .then(function (response) {
                alert("Message sent successfully!");
                document.querySelector(".contact-form").reset(); // Clear form after submission
            })
            .catch(function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});
