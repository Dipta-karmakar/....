Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  // mixblendmode:normal,
});
Shery.makeMagnet(".progress");

// Shery.imageMasker(".education-img" /* Element to target.*/, {
//   //Parameters are optional.
//   mouseFollower: true,
//   text: "Dipt@",
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

Shery.makeMagnet(".btn");
// Shery.imageEffect(".education-img", {
//   style: 4,
//   debug: true,
//   gooey: true,
// });
Shery.makeMagnet(".home-content h1 span" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate(".home-content h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.2,
});

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
let main = document.querySelector(".page12");
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

//

// import Shery from "sheryjs"; /*Don't use if using CDN*/

// Shery.mouseFollower();
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
