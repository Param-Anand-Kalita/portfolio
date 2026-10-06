document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  $("year").textContent = new Date().getFullYear();
  const m = document.querySelector(".menu-btn"),
    n = document.querySelector(".nav-links");
  m.onclick = () => n.classList.toggle("show");
  const f = $("contactForm");
  if (f)
    f.onsubmit = (e) => {
      e.preventDefault();
      document.querySelectorAll(".error").forEach((x) => (x.textContent = ""));
      $("successMessage").textContent = "";
      const name = $("name").value.trim(),
        email = $("email").value.trim(),
        message = $("message").value.trim();
      let valid = true;
      if (name.length < 2) {
        $("nameError").textContent = "Please enter your name.";
        valid = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        $("emailError").textContent = "Please enter a valid email address.";
        valid = false;
      }
      if (message.length < 10) {
        $("messageError").textContent =
          "Message must contain at least 10 characters.";
        valid = false;
      }
      if (valid) {
        $("successMessage").textContent =
          "Thank you! Your message has been validated successfully.";
        f.reset();
      }
    };
});
