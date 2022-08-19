/////////*******************************************///////
/////////*************** TYPING EFFECT *************///////
/////////*******************************************///////

const texts = ['Front-End developer', 'UI designer'];
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

// const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
// const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
// const container = document.getElementsByClassName("theme-container")[0];
// const themeIcon = document.getElementById("theme-icon");


// container.addEventListener("click", setTheme);

// function setTheme() {

//     function setLight() {

//         themeIcon.src = sun;

//     }

//     function setDark() {

//         themeIcon.src = moon;

//     }

// }


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


/////////***************** SUBMIT BUTTON ****************///////
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6Izsku_qLcnr9lc0Ivj5eejB7-5FCaRE",
    authDomain: "test-form-d3492.firebaseapp.com",
    databaseURL: "https://test-form-d3492.firebaseio.com",
    projectId: "test-form-d3492",
    storageBucket: "test-form-d3492.appspot.com",
    messagingSenderId: "222398070278",
    appId: "1:222398070278:web:bf51f5c8a26dcfff9ecd87",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
// listen for a submit
document.querySelector(".form-container").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let number = document.querySelector(".number").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, number, message);

    saveContactInfo(name, email, number, message);
    document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, number, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        number: number,
        message: message,
    });
}