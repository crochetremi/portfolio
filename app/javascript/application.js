// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarMenu = document.getElementById("navbarMenu");

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", function () {
      navbarToggle.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");

      const isExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
      navbarToggle.setAttribute("aria-expanded", !isExpanded);
    });
  }

  // --- Accessible Dropdown Toggle ---
  // This script ensures dropdowns are accessible, especially on mobile
  // where hover is not an option. It also manages ARIA attributes.
  const dropdowns = document.querySelectorAll(".dropdown > .main-navbar__link");

  dropdowns.forEach(function (dropdownToggle) {
    // Check if the dropdown is a link that should not navigate on first click
    // For this example, the main 'Services' link is just a toggle, not a destination page
    dropdownToggle.addEventListener("click", function (event) {
      // Prevent navigation if it's just for opening the dropdown
      event.preventDefault();

      const parentDropdown = dropdownToggle.parentElement;
      parentDropdown.classList.toggle("is-active");

      const isExpanded =
        dropdownToggle.getAttribute("aria-expanded") === "true";
      dropdownToggle.setAttribute("aria-expanded", !isExpanded);
    });
  });

  // Optional: Close dropdowns if user clicks outside of them
  document.addEventListener("click", function (event) {
    const openDropdown = document.querySelector(".dropdown.is-active");
    if (openDropdown && !openDropdown.contains(event.target)) {
      openDropdown.classList.remove("is-active");
      const toggle = openDropdown.querySelector('[aria-expanded="true"]');
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});
