///////*******************************************///////
///////*********** js for typing effect **********///////
///////*******************************************///////


// 
const texts = ['Front-End developer', 'UX/UI designer'];
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






///////*******************************************///////
///////*********** js for Dropdown menu **********///////
///////*******************************************///////




// get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// Lopp through all dropdrown elements
dropdowns.forEach(dropdown => {

    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const option = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected')


    /*
    we are using this method in order to have multiple dropdown menus on the page work
    */

    //add a click event to the select element

    select.addEventListener('click', () => {
        // add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        // add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    //loop through all option elements
    option.forEach(option => {
        //add a click event to the option element
        option.addEventListener('click', () => {
            //change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            //add the ckicked select styles to the select element
            select.classList.remove('select-clicked');
            //add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //add the open styles to the menu element
            menu.classList.remove('menu-open');
            //remove active class from all option elements
            option.forEach(option => {
                option.classList.remove('active');
            });
            //add active class to clicked option element
            option.classList.add('active');
        });
    });
});



///////*******************************************///////
///////*********** GALLARY ITEM FILTER ***********///////
///////*******************************************///////

const filterButtons = document.querySelector(".filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;


for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {

            for (let j = 0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove("active2")
            }
            this.classList.add("active");
            const target = this.getAttribute("data-target")

            for (let k = 0; k > items.length; k++) {
                items[k].getElementsByClassName.display = "none";
                if (target == items[k].getAttribute("data-id")) {
                    items[k].getElementsByClassName.display = "block";
                }

                if (target == "all") {
                    items[k].getElementsByClassName.display = "block";
                }
            }
        })
    }