/////////*******************************************///////
/////////*************** CURSORS EFFECT ************///////
/////////*******************************************///////

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})


/////////********************************************///////
/////////*************** HAMBURGER MENU *************///////
/////////********************************************///////

let menu = document.querySelector(".hamburgerMenu");
let navItems = document.querySelector(".nav-items");

menu.addEventListener('click', () => {
  menu.classList.toggle("move");
  navItems.classList.toggle("open-menu");
});

window.addEventListener('scroll', () => {
  menu.classList.remove("move");
  navItems.classList.remove("open-menu");
});

/////////*******************************************///////
/////////*************** TYPING EFFECT *************///////
/////////*******************************************///////

const texts = ['Junior Front-End developer', 'UX/UI Designer'];
// here we need to define a counter that gose on eche word one by one inside the array 
let count = 0;
// we need also to check indivijual caractère(letters) we are passing by right now inside the array
let index = 0;
// we need to define the text that was selected at the time
let currentText = '';
// we need to spicify the individuel letters
let letter = '';

// now defining the function for our typing effect, and we wanna to call it directly, it's called "self invoked function ", means whenevere she gets read, it gets invoked at the same time.
(function type() {

  if (count == texts.length) { // == for the 2 content that i have inside the array function
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);

})();



/////////*********************************************///////
/////////************* DARK/LIGHT MODE ***************///////
/////////*********************************************///////

const sun = "./assets/imgs/sun.svg";
const moon = "./assets/imgs/moon.svg";
// FOR THE RIGHT CIRCLE THEME
const rightLightCircle = "./assets/imgs/circle-light.svg";
const rightDarkCircle = "./assets/imgs/circle-dark.svg";

// FOR THE LEFT CIRCLE THEME
const leftLightCircle = "./assets/imgs/circle-dark.svg";
const leftDarkCircle = "./assets/imgs/circle-dark.svg";

var theme = "dark";

const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
const rightCircleImg = document.querySelector(".circle-Right");
const leftCircleImg = document.querySelector(".circle-left");
container.addEventListener("click", setTheme);

function setTheme() {
  switch (theme) {
    case "dark":
      document.documentElement.setAttribute('data-theme', 'dark');
      theme = "light"; // va localiser tous les elements dans tous le document (et html et css) pour replacer le "theme" par "light"
      themeIcon.src = sun;
      
      //RIGHT IMG
      rightCircleImg.src = rightDarkCircle;
      
      //LEFT IMG
      leftCircleImg.src = leftDarkCircle;

      darkMode();

      break;
      case "light":
        document.documentElement.setAttribute('data-theme', 'light'); // va insrérer le data-theme="dark" dans l'élément racine du document. En l'occurance => celui de l'html (balise)
        localStorage.setItem('theme', 'dark');
        theme = "dark"
        themeIcon.src = moon;

        // RIGHT IMG
        rightCircleImg.src = rightLightCircle;

        // LEFT IMG
        leftCircleImg.src = leftLightCircle;

        lightMode();
      break;
  }
}

function lightMode() {
  console.log("light here")
  root.style.setProperty(
    "--bs-dark",
    "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );

  container.classList.remove("shadow-dark");

  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);

  themeIcon.classList.add("change");
}


function darkMode() {
  console.log("dark here")
  root.style.setProperty("--bs-dark", "#212529");

  container.classList.remove("shadow-light");

  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);

  themeIcon.classList.add("change");
}


/////////*******************************************///////
/////////************ SERVICES SECTION *************///////
/////////*******************************************///////

let elementsCC = document.querySelectorAll('.origin-center');
elementsCC.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;

  //center center
  let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';

  element.style.setProperty("transform-origin", resultCC)
}); // forEach


let elementsTL = document.querySelectorAll('.origin-left');

elementsTL.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;

  //top left
  let resultTL = x + 'px ' + y + 'px';

  element.style.setProperty("transform-origin", resultTL)
}); // forEach



/////////*******************************************///////
/////////*********** GALLARY ITEM FILTER ***********///////
/////////*******************************************///////


//Get Elements from DOM

const btns = document.querySelectorAll('.portfolio-gallery button');
const imgs = document.querySelectorAll('.portfolio-images img');

//Add a click event to all buttons
for (let i = 1; i < btns.length; i++) {
  btns[i].addEventListener('click', filterImg);
}

//Set active button on click
function setActiveBtn(e) {

  //Remove active class from all buttons
  btns.forEach(btn => {
    btn.classList.remove('btn-clicked');
  });

  //Add active class to clicked button
  e.target.classList.add('btn-clicked');

}

//Filter Images
function filterImg(e) {

  //Run the active button function
  setActiveBtn(e);

  //Loop through all images
  imgs.forEach(img => {
    //Expand all images
    img.classList.remove('img-shrink');
    img.classList.add('img-expand');

    //Get data from data attributes
    //Get image type data
    const imgType = parseInt(img.dataset.img);
    //Get button type data
    const btnType = parseInt(e.target.dataset.btn);

    /*
      If the image type and the type of the 
      clicked button are NOT the same
    */
    if (imgType !== btnType) {
      //Hide the image
      img.classList.remove('img-expand');
      img.classList.add('img-shrink');
    }
  });
}

//Set click event for the 'All' button
btns[0].addEventListener('click', (e) => {
  //Run the active button function
  setActiveBtn(e);
  //Loop through all images
  imgs.forEach(img => {
    //Expand all images
    img.classList.remove('img-shrink');
    img.classList.add('img-expanded');
  });
});




/////////*******************************************///////
/////////************* CONTACT SECTION *************///////
/////////*******************************************///////

/////////***************** FORM CONTAINER ****************///////

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});