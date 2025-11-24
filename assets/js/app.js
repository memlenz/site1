// SCRIPT NAVBAR ACCESSIBLE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);

  nav.classList.toggle("open");

  // Animation icône hamburger → croix
  toggle.classList.toggle("active");
});
