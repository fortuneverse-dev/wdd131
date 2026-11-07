// ===== Footer: current year and last modified date =====
const yearSpan = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// ===== Hamburger menu ======
const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    // Show an X when the menu is open, the hamburger symbol when closed
    menuButton.textContent = isOpen ? "\u2715" : "\u2630";
    menuButton.setAttribute("aria-expanded", isOpen);
});