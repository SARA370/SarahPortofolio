
// /////////*******************************************///////
// /////////*************** CURSORS EFFECT ************///////
// /////////*******************************************///////
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
}), document.addEventListener("click", () => {
  cursor.classList.add("expand"), setTimeout(() => {
    cursor.classList.remove("expand")
  }, 500)
});



// /////////********************************************///////
// /////////*************** HAMBURGER MENU *************///////
// /////////********************************************///////
let menu = document.querySelector(".hamburgerMenu"),
  navItems = document.querySelector(".nav-items");
menu.addEventListener("click", () => {
  menu.classList.toggle("move"), navItems.classList.toggle("open-menu")
}), window.addEventListener("scroll", () => {
  menu.classList.remove("move"), navItems.classList.remove("open-menu")
});


// /////////*******************************************///////
// /////////*************** TYPING EFFECT *************///////
// /////////*******************************************///////
const texts = ["Junior Front-End developer", "UI/UX Designer"];
let count = 0,
  index = 0,
  currentText = "",
  letter = "";
! function e() {
  count == texts.length && (count = 0), currentText = texts[count], letter = currentText.slice(0, ++index), document.querySelector(".typing").textContent = letter, letter.length == currentText.length && (count++, index = 0), setTimeout(e, 300)
}();


// /////////*********************************************///////
// /////////************* DARK/LIGHT MODE ***************///////
// /////////*********************************************///////
const sun = "./assets/imgs/sun.svg",
  moon = "./assets/imgs/moon.svg",
  rightLightCircle = "./assets/imgs/circle-light.svg",
  rightDarkCircle = "./assets/imgs/circle-dark.svg",
  leftLightCircle = "./assets/imgs/circle-dark.svg",
  leftDarkCircle = "./assets/imgs/circle-dark.svg";
var theme = "dark";
const root = document.querySelector(":root"),
  container = document.getElementsByClassName("theme-container")[0],
  themeIcon = document.getElementById("theme-icon"),
  rightCircleImg = document.querySelector(".circle-Right"),
  leftCircleImg = document.querySelector(".circle-left");

function setTheme() {
  switch (theme) {
    case "dark":
      document.documentElement.setAttribute("data-theme", "dark"), theme = "light", themeIcon.src = sun, rightCircleImg.src = rightDarkCircle, leftCircleImg.src = leftDarkCircle, darkMode();
      break;
    case "light":
      document.documentElement.setAttribute("data-theme", "light"), localStorage.setItem("theme", "dark"), theme = "dark", themeIcon.src = moon, rightCircleImg.src = rightLightCircle, leftCircleImg.src = leftLightCircle, lightMode()
  }
}

function lightMode() {
  console.log("light here"), root.style.setProperty("--bs-dark", "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"), container.classList.remove("shadow-dark"), setTimeout(() => {
    container.classList.add("shadow-light"), themeIcon.classList.remove("change")
  }, 300), themeIcon.classList.add("change")
}

function darkMode() {
  console.log("dark here"), root.style.setProperty("--bs-dark", "#212529"), container.classList.remove("shadow-light"), setTimeout(() => {
    container.classList.add("shadow-dark"), themeIcon.classList.remove("change")
  }, 300), themeIcon.classList.add("change")
}
container.addEventListener("click", setTheme);




// /////////*******************************************///////
// /////////************ SERVICES SECTION *************///////
// /////////*******************************************///////
let elementsCC = document.querySelectorAll(".origin-center");
elementsCC.forEach(e => {
  var t = e.getBBox(),
    s = t.x,
    r = t.y,
    t = s + t.width / 2 + "px " + (r + t.height / 2) + "px";
  e.style.setProperty("transform-origin", t)
});
let elementsTL = document.querySelectorAll(".origin-left");
elementsTL.forEach(e => {
  var t = e.getBBox(),
    s = t.x,
    r = t.y,
    r = (t.width, t.height, s + "px " + r + "px");
  e.style.setProperty("transform-origin", r)
});



// /////////*******************************************///////
// /////////*********** GALLARY ITEM FILTER ***********///////
// /////////*******************************************///////
const btns = document.querySelectorAll(".portfolio-gallery button"),
  imgs = document.querySelectorAll(".portfolio-images img");
for (let e = 1; e < btns.length; e++) btns[e].addEventListener("click", filterImg);

function setActiveBtn(e) {
  btns.forEach(e => {
    e.classList.remove("btn-clicked")
  }), e.target.classList.add("btn-clicked")
}

function filterImg(t) {
  setActiveBtn(t), imgs.forEach(e => {
    e.classList.remove("img-shrink"), e.classList.add("img-expand"), parseInt(e.dataset.img) !== parseInt(t.target.dataset.btn) && (e.classList.remove("img-expand"), e.classList.add("img-shrink"))
  })
}
btns[0].addEventListener("click", e => {
  setActiveBtn(e), imgs.forEach(e => {
    e.classList.remove("img-shrink"), e.classList.add("img-expanded")
  })
});




// /////////*******************************************///////
// /////////************* CONTACT SECTION *************///////
// /////////*******************************************///////

// /////////***************** FORM CONTAINER ****************///////
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let e = this.parentNode;
  e.classList.add("focus")
}

function blurFunc() {
  let e = this.parentNode;
  "" == this.value && e.classList.remove("focus")
}
inputs.forEach(e => {
  e.addEventListener("focus", focusFunc), e.addEventListener("blur", blurFunc)
});