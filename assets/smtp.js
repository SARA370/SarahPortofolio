/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


/////////***************** SUBMIT BUTTON ****************///////


const userName = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const phone = document.getElementById("phone").value;
const message = document.getElementById("message").value;


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "selenadam07@gmail.com",
        Password : "BE11F2CEC841C2CD9BE1327B9FFC5F238807",
        To : "selenadam07@gmail.com",
        From : "sarahalrashid370@gmail.com",
        Subject : "Formulaire de contact dans le porfolio",
        Body : "Nom: " + userName + "<br/> Adress mail: " + email + "<br/> Sujet: " + subject + "<br/> Numéro de téléphone: " + phone +"<br/> Message du user : " + message
    }).then(
      message => alert(message)
    );
}
