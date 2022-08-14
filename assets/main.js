// ///////*******************************************///////
// ///////*************** TYPING EFFECT *************///////
// ///////*******************************************///////

// const texts = ['Front-End developer', 'UI designer'];
// // here we need to define a counter that gose on eche word one by one inside the array 
// let count = 0;
// // we need also to check indivijual caractère(letters) we are passing by right now inside the array
// let index = 0;
// // we need to define the text that was selected at the time
// let currentText = '';
// // we need to spicify the individuel letters
// let letter = '';

// // now defining the function for our typing effect, and we wanna to call it directly, it's called "self invoked function ", means whenevere she gets read, it gets invoked at the same time.
// (function type() {

//     if (count == texts.length) { // == for the 2 content that i have inside the array function
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0, ++index);

//     document.querySelector('.typing').textContent = letter;
//     if (letter.length == currentText.length) {
//         count++;
//         index = 0;
//     }
//     setTimeout(type, 300);

// })();




// ///////*******************************************///////
// ///////************* DROPDOWN MENU ***************///////
// ///////*******************************************///////




// ///////*********************************************///////
// ///////************* DARK/LIGHT MODE ***************///////
// ///////*********************************************///////

// //create a variable to monitor the input checkbox
// const colorSwitch = document.getElementById("input-color-switch");

// //when the input is clicked verify the state of the checkbox
// colorSwitch.addEventListener("click", checkMode);

// //1. see which state the checkbox is in
// //2. if it is checked enable the dark mode by adding the class
// //3. if it is not checked remove dark mode by removing the class
// function checkMode() {
//   console.log("checking...");
//   if (colorSwitch.checked) {
//     console.log("dark on");
//     darkModeOn();
//   } else {
//     console.log("dark off");
//     darkModeOff();
//   }
// }

// function darkModeOn() {
//   document.body.classList.add("dark-mode");
// }

// function darkModeOff() {
//   document.body.classList.remove("dark-mode");
// }




// ///////*******************************************///////
// ///////*********** GALLARY ITEM FILTER ***********///////
// ///////*******************************************///////

// // get Elements from DOM
// const btns = document.querySelectorAll('.portfolio-gallery button');
// const imgs = document.querySelectorAll('.portfolio-images img');


// // add a click event to all buttons
// for(let i = 0; i < btns.length; i++){ 
//     btns[i].addEventListener('click', filterImg);  
// }

// // set active button on click
// function setActiveBtn(e){ 
// 	// Add active class to clicked button
//     e.target.classList.add('btn-clicked');
//     btns.forEach(btn =>{
//         btn.classList.remove('btn-clicked');
//     });
// }
// //Filter Images
// function filterImg(e){
//     // run the active button function

//     setActiveBtn(e);
//     // Loop through all images
//     imgs.forEach(img=>{
// 		// Expand all images
//         img.classList.remove('img-shrink');
//         img.classList.add('img-expand');
        
//         //Get data from data attributes
// 		//Get image type data

//         const imgType = img.dataset.img;

//         const imgType = parseInt(img.dataset.img);


//         //Get button type data
//         const btnType = parseInt(e.target.dataset.btn);

// 		// if the image type and the the type of the clicked button are not the same
//         if(imgType !== btnType){
// 			// Hide all images
//             img.classList.remove('img-expand');
//             img.classList.add('img-shrink');
//         };
//     });
// };

// // set click event for the 'All' button
// btns[0].addEventListener('click', (e)=>{
// <<<<<<< HEAD
// 	console.log('clicked')

// 	//Run the active button function
// =======
//     console.log('clicked')
    
//     //Run the active button function
// >>>>>>> a8796ee7d0b2a05671128cfcff7cba92e75be31c
//     setActiveBtn(e);
//     //Loop through all images
//     imgs.forEach( img =>{
//         //Exapnd all images
//         img.classList.remove('img-shrink');
//         img.classList.add('img-expand');
//     });
// });



// ///////*******************************************///////
// ///////*********** DARK LIGHT THEME  *************///////
// ///////*******************************************//////


const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");


container.addEventListener("click", setTheme);

function setTheme(){

    function setLight() {

        themeIcon.src = sun;
    
      }
      function setDark() {
       
        themeIcon.src = moon;
    
      }
    
    }

}
