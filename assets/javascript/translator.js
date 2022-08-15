// ///////*******************************************///////
// ///////************ CHANGE LANGUAGES *************///////
// ///////*******************************************///////
// INITIALIZATION OF THE LANGUAGE SWITCHER BY FINDING THE RIGHT JSON OF THE LANG
function Translate() {
    //initialization
    this.init = function (attribute, lng) {
        this.attribute = attribute;
        this.lng = lng;
    }
    //translate 
    this.process = function () {
        _self = this;
        var xrhFile = new XMLHttpRequest();
        //load content data 
        xrhFile.open("GET", "assets/lng/" + this.lng + ".json", false);
        xrhFile.onreadystatechange = function () {
            if (xrhFile.readyState === 4) {
                if (xrhFile.status === 200 || xrhFile.status == 0) {
                    var LngObject = JSON.parse(xrhFile.responseText);
                    var allDom = document.getElementsByTagName("*");
                    for (var i = 0; i < allDom.length; i++) {
                        var elem = allDom[i];
                        var key = elem.getAttribute(_self.attribute);
                        if (key != null) {
                            elem.innerHTML = LngObject[key];
                        }
                    }
                }
            }
        }
        xrhFile.send();
    }
}

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
                // HERE TO REMOVE THE ACTIVE DIV OF THE LANGUAGE
            });
            //Add active class to clicked option element
            option.classList.add('active');
            // ADD THE ACTIVE LANGUAGE TO SHOW UP THE LANGUAGE
        
        });
    });
});


// TO CHANGE THE LANGUAGE TO ALL THE DOM 

 //This function will be called when user click changing language
 function translate(lng, tagAttr) {
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
}


// GET THE ID OF THE LANGUAGES BUTTONS
const enTranslator = document.getElementById('enTranslator');
const frTranslator = document.getElementById('frTranslator');

//WHEN THE DOM IS LOADED AND THE USER CLICK ON THE LANGUAGE, IT WILL CHANGE
document.addEventListener("DOMContentLoaded", () => {

    console.log("DOMJ'SAIS PAS QUOI")
    //This is id of HTML element (English) with attribute lng-tag
    enTranslator.addEventListener('click', ()=>{
        console.log("english here")
        translate('en', 'lng-tag');
    });
    //This is id of HTML element (Khmer) with attribute lng-tag
    frTranslator.addEventListener('click', ()=>{
        console.log("french here")
        translate('fr', 'lng-tag');
    });
});