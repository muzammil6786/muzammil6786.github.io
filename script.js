// toggle icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// active navbar
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// sticky navigation
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);

// remove toggle icon and navbar when click navbar links
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");

// scroll to top

// ScrollReveal({
//   distance: "80px",
//   duration: 2000,
//   delay: 200,
// });

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .skills-container, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img, .skills-container", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content, .projects-container", {
  origin: "right",
});

// typed js

const typed = new Typed(".multiple-text", {
  strings: ["Node.js Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// dowonload cv

document.getElementById("resume").addEventListener("click", function () {
  // Open resume in a new tab
  window.open("./resume/Muzammil.pdf", "_blank");

  // Download resume
  var link = document.createElement("a");
  link.href = "./resume/Muzammil.pdf";
  link.download = "Muzammil.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.getElementById("dwresume").addEventListener("click", function () {
    // Open resume in a new tab
    window.open("./resume/Muzammil.pdf", "_blank");
  
    // Download resume
    var link = document.createElement("a");
    link.href = "./resume/Muzammil.pdf";
    link.download = "Muzammil.pdf";
    link.style.display = "none"; // Hide the link element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  

// redirect to github

document.getElementById("figmabtn").addEventListener("click", function () {
  window.open("https://github.com/RajatKumarJangid/adamant-knowledge-2074", "_blank");
});


document.getElementById("imindbtn").addEventListener("click", function () {
  window.open("https://github.com/Hari3199/coding-guru-1234", "_blank");
});
