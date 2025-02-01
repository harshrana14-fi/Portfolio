// Dark Mode Toggle
const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  
  // Change button text based on the current theme
  if (document.body.classList.contains("dark-theme")) {
    themeToggleButton.innerText = "🌙";
    localStorage.setItem("theme", "dark"); // Save the user's theme preference
  } else {
    themeToggleButton.innerText = "🌞";
    localStorage.setItem("theme", "light");
  }
});

// Load the user's saved theme preference (if any) on page load
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggleButton.innerText = "🌙"; // Set the button to dark mode symbol
  } else {
    themeToggleButton.innerText = "🌞"; // Set the button to light mode symbol
  }
});

// Change Background Image Functionality
const changeBackgroundButton = document.querySelector("button[onclick='changeBackground()']");

function changeBackground() {
  const body = document.querySelector("body");
  const backgrounds = [
    "url('images/background1.jpg')",
    "url('images/background2.jpg')",
    "url('images/background3.jpg')",
  ];
  
  // Get a random background from the array
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
  // Apply the new background to the body
  body.style.backgroundImage = randomBackground;
}

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
