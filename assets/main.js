///////*******************************************///////
///////*************** TYPING EFFECT *************///////
///////*******************************************///////

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
///////************* DROPDOWN MENU ***************///////
///////*******************************************///////

let langItem = doument.getElementsByClassName('language-item');
let btnImg = doument.getElementById('btn-title');
let btnTitle = document.getElementById('btn-title');

for(let i=0; i<langItem.length; i++) {
    let langItem = langItem[i];
    langItem.onclick = changeLanguage;
}
function changeLanguage(e){
    btnImg.src = 'imgs/'+this.dataset.lang+'.svg';
    btnTitle.innerText = this.dataset.lang;
}


///////*********************************************///////
///////************* DARK/LIGHT MODE ***************///////
///////*********************************************///////
let toggle = document.querySelector('.toggle')
toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('activ')
})




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