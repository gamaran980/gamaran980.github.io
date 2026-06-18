// ===============================
// 1. ON‑LOAD ANIMATIONS
// ===============================
window.addEventListener("load", () => {
    document.querySelectorAll(".fade-load, .slide-load, .scale-load")
        .forEach(el => el.classList.add("loaded"));
});


// ===============================
// 2. SMOOTH SCROLLING FOR NAV LINKS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// ===============================
// 3. MOBILE MENU TOGGLE (if you add one later)
// ===============================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}


// ===============================
// 4. SCROLL REVEAL ANIMATIONS
// ===============================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));


// ===============================
// 5. BOOKING FORM VALIDATION
// ===============================
const form = document.querySelector("#booking-form");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const datetime = form.datetime.value;

        if (!name || !email || !datetime) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate sending
        alert("Your booking request has been sent!");
        form.reset();
    });
}


// ===============================
// 6. LIGHTBOX GALLERY (optional)
// ===============================
const galleryImages = document.querySelectorAll(".gallery-grid img");

if (galleryImages.length > 0) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `<img src="">`;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("img");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("show");
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });
}
