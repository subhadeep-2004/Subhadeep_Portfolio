let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
// const menuIcon = document.getElementById('menu-icon');
menu.onclick = () => {
  navbar.classList.toggle("active");
  // menuIcon.classList.toggle('bx-menu');

  
};
window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove('bx-x');
  menu.classList.add('bx-menu');
};

document.getElementById('menu-icon').addEventListener('click', function() {
  this.classList.toggle('bx-menu');
  this.classList.toggle('bx-x');
});


// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     navbar.classList.remove("active");
//     menu.classList.remove('bx-x');
//     menu.classList.add('bx-menu');
//   });
// });
// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
