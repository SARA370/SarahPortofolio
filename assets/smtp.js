/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


/////////***************** SUBMIT BUTTON ****************///////





function sendEmail(){

  const userName = document.querySelector("#Name").value;
  const email = document.querySelector("#Email").value;
  const subject = document.querySelector("#Subject").value;
  const phone = document.querySelector("#Phone").value;
  const message = document.querySelector("#Message").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sarah_3701@outlook.com",
        Password : "83B4812820C99F6F96DD9A5A3936CC92F04E",
        To : "sarah_3701@outlook.com",
        From : "sarahadam0075@gmail.com",
        Subject : "Formulaire de contact dans le porfolio",
        Body : " Nom: " + userName + "<br/> Adress mail: " + email + "<br/> Sujet: " + subject + "<br/> Numéro de téléphone: " + phone +"<br/> Message du user : " + message
    }).then(
      message => alert(message)
    );
}
