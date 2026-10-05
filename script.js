document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       CURRENT YEAR
    ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuButton =
        document.querySelector(".menu-btn");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("show");

        });

    }


    /* =========================
       CONTACT FORM VALIDATION
    ========================= */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            // Clear previous errors

            document.querySelectorAll(".error").forEach(function (error) {

                error.textContent = "";

            });


            document.getElementById("successMessage").textContent = "";


            // Get input values

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            // Email validation pattern

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            let valid = true;


            // Validate name

            if (name.length < 2) {

                document.getElementById("nameError").textContent =
                    "Please enter your name.";

                valid = false;

            }


            // Validate email

            if (!emailPattern.test(email)) {

                document.getElementById("emailError").textContent =
                    "Please enter a valid email address.";

                valid = false;

            }


            // Validate message

            if (message.length < 10) {

                document.getElementById("messageError").textContent =
                    "Message must contain at least 10 characters.";

                valid = false;

            }


            // If all details are valid

            if (valid) {

                document.getElementById("successMessage").textContent =
                    "Thank you! Your message has been validated successfully.";

                contactForm.reset();

            }

        });

    }

});