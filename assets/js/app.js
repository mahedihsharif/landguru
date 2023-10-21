let barMenuIcon = document.getElementById("bar");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

barMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  barMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navBar.classList.remove("active");
    barMenuIcon.classList.toggle("fa-times");
  });
});
