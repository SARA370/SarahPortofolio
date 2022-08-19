// //Import the functions you need from the SDKs you need

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"; // NOTE ici on a besoin uniquement du lien qu'on met dans le src dans la balise script 


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// //Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDyNhI0Jz-7UFguGGjrWwC4ENGdPm0Clis",
//   authDomain: "form-contact-test.firebaseapp.com",
//   projectId: "form-contact-test",
//   storageBucket: "form-contact-test.appspot.com",
//   messagingSenderId: "734414081150",
//   appId: "1:734414081150:web:96f63055f8704b5dcf5c2f"
// };


// // Initialize Firebase
// firebase.initializeApp(firebaseConfig); // que j'ai copier dans le code du youtubeur

// // 1 Référence de la collection contactInfo (une table de donner)
// let contactInfo = firebase.database().ref("infos")





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


// SUBMIT CONTACT FORM !!!! 

// listen for a submit
document.querySelector(".form-container").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log("hello");

    //   Get input Values
    const clientName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;   
    
    console.log(clientName, email, phone, message)
    

    saveContactInfo(clientName, email, number, message);
    document.querySelector(".form-container").reset();
}



//Save infos to Firebase
function saveContactInfo(clientName, email, phone, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: clientName,
        email: email,
        phone: phone,
        message: message,
    });
}