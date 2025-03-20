/* ============================== Typing Animations ============================== */

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Mobile and App Designer", "UI/UX Designer", "Graphic Designer", "Content Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});



/* ============================== Send Message Activation ============================== */

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS User ID

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("contact-name").value;
        let email = document.getElementById("contact-email").value;
        let subject = document.getElementById("contact-subject").value;
        let message = document.getElementById("contact-message").value;
        let formStatus = document.getElementById("form-status");

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }).then(
            function () {
                formStatus.innerHTML = "✅ Message Sent Successfully!";
                formStatus.style.color = "green";
            },
            function (error) {
                formStatus.innerHTML = "❌ Failed to Send Message!";
                formStatus.style.color = "red";
                console.log("EmailJS Error: ", error);
            }
        );
    });
});
