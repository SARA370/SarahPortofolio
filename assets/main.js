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

// let langItem = doument.getElementsByClassName('language-item');
// let btnImg = doument.getElementById('btn-title');
// let btnTitle = document.getElementById('btn-title');

// for(let i=0; i<langItem.length; i++) {
//     let langItem = langItem[i];
//     langItem.onclick = changeLanguage;
// }
// function changeLanguage(e){
//     btnImg.src = 'imgs/'+this.dataset.lang+'.svg';
//     btnTitle.innerText = this.dataset.lang;
// }


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

// $(document).on('click','.filter-btns',function(){
//     $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
// });

// $(document).ready(function(){
//     $('.list').click(function(){
//         const value = $(this).attr('data-filter');
//         if(value == 'all'){
//             $('projetcs-box').show('1000');
//         }else{
//             $('.projet-box').not('.'+value).hide('1000');
//             $('.projet-box').filter('.'+value).show('1000');
//         }
//     })
// })