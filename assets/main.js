// ///////*******************************************///////
// ///////*************** TYPING EFFECT *************///////
// ///////*******************************************///////

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




// ///////*******************************************///////
// ///////************* DROPDOWN MENU ***************///////
// ///////*******************************************///////

//Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    /*
      We are using this method in order to have 
      multiple dropdown menus on the page work
    */

    //Add a click event to the select element
    select.addEventListener('click', () => {
        //Add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    //Loop through all option elements
    options.forEach(option => {
        //Add a click event to the option element
        option.addEventListener('click', () => {
            //Change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            //Add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //Add the open styles to the menu element
            menu.classList.remove('menu-open');
            //Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            //Add active class to clicked option element
            option.classList.add('active');
        });
    });
});


// ///////*********************************************///////
// ///////************* DARK/LIGHT MODE ***************///////
// ///////*********************************************///////

const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");


container.addEventListener("click", setTheme);

function setTheme() {

    function setLight() {

        themeIcon.src = sun;

    }

    function setDark() {

        themeIcon.src = moon;

    }

}




// ///////*******************************************///////
// ///////*********** GALLARY ITEM FILTER ***********///////
// ///////*******************************************///////
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