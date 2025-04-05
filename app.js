const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

//

//
let main = document.querySelector(".page1");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (det) {
  // cursor.style.left = det.x + "px";
  // cursor.style.top = det.y + "px";
  gsap.to(cursor, {
    left: det.x,
    top: det.y,
    // duration:1,
  });
});
main.addEventListener("mouseleave", function (det) {
  // cursor.style.left = det.x + "px";
  // cursor.style.top = det.y + "px";
  gsap.to(cursor, {
    opacity: 0,
    scale: 0,
  });
});
main.addEventListener("mouseenter", function (det) {
  // cursor.style.left = det.x + "px";
  // cursor.style.top = det.y + "px";
  gsap.to(cursor, {
    opacity: 1,
    scale: 1,
  });
});

let menu = document.querySelector("#menu");
let menu_ham = document.querySelector("#menu_ham");
let flag = false;
menu.addEventListener("click", () => {
  if (!flag) {
    menu.classList.add("open");
    flag = true;
  } else {
    menu.classList.remove("open");
    flag = false;
  }
});

// let icons = document.querySelectorAll(".home-content .social-icons a");

// icons.addEventListener("mouseenter", function (det) {
//   // cursor.style.left = det.x + "px";
//   // cursor.style.top = det.y + "px";
//   gsap.to(cursor, {
//     opacity: 0,
//     scale: 0,
//   });
// });
