document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const contactSlogan = document.getElementById("contact_slogan");

    contactSlogan.addEventListener("click", () => {
        contactForm.classList.toggle("expended");
    });
});