// ====================
// 1. MOBILE MENU TOGGLE
// ====================
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
    navLinks.classList.toggle("open");

    const isExpanded = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isExpanded);
    menuButton.innerHTML = isExpanded ? "✕" : "☰";
}

menuButton.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            toggleMenu();
        }
    });
});

const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.background = "#ff9800";
progressBar.style.width = "0%";
progressBar.style.zIndex = "1000";
document.body.appendChild(progressBar);

// Update progress on scroll
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + "%";
});

const contactForm = document.getElementById("contact-form-id");
const messageDiv = document.getElementById("form-message");

if (contactForm && messageDiv) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting

        // Get values
        const nameInput = document.getElementById("name").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const messageInput = document.getElementById("message").value.trim();

        // Validate required fields
        if (nameInput === "" || emailInput === "" || messageInput === "") {
            messageDiv.textContent = "Please fill out all fields.";
            messageDiv.style.color = "red";
        } else {
            // Success Message
            messageDiv.textContent = "Thank you for your message! I will reply soon.";
            messageDiv.style.color = "green";

            // Reset form
            contactForm.reset();
        }
    });
}
