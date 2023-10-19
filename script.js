const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Get references to the buttons and containers
const buttons = document.querySelectorAll(".variety");
const containers = document.querySelectorAll(".boxId");

// Function to hide all containers except the one associated with the clicked button
function toggleContainers(clickedButton) {
  const containerId = clickedButton.dataset.container;
  containers.forEach((container) => {
    if (container.id === containerId) {
      container.style.display = "flex";
    } else {
      container.style.display = "none";
    }
  });
}

// Initially show the first button's container
document.getElementById("biography").style.display = "flex";

// Add click event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleContainers(button);
  });
});
