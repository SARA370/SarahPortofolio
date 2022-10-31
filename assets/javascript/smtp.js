var Email = {
  send: function (n) {
    return new Promise(function (a, e) {
      n.nocache = Math.floor(1e6 * Math.random() + 1), n.Action = "Send";
      var t = JSON.stringify(n);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        a(e)
      })
    })
  },
  ajaxPost: function (e, a, t) {
    var n = Email.createCORSRequest("POST", e);
    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onload = function () {
      var e = n.responseText;
      null != t && t(e)
    }, n.send(a)
  },
  ajax: function (e, a) {
    var t = Email.createCORSRequest("GET", e);
    t.onload = function () {
      var e = t.responseText;
      null != a && a(e)
    }, t.send()
  },
  createCORSRequest: function (e, a) {
    var t = new XMLHttpRequest;
    return "withCredentials" in t ? t.open(e, a, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, a) : t = null, t
  }
};

function sendEmail() {
  var e = document.querySelector("#Name").value,
    a = document.querySelector("#Email").value,
    t = document.querySelector("#Subject").value,
    n = document.querySelector("#Phone").value,
    o = document.querySelector("#Message").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sarahalrashid539@gmail.com",
    Password: "AFC0AC6C6AC128DA7CA525F0241DA0CB2048",
    To: "sarahalrashid539@gmail.com",
    From: "sarahalrashid370@gmail.com",
    Subject: "Formulaire de contact dans le porfolio",
    Body: " Nom: " + e + "<br/> Adress mail: " + a + "<br/> Sujet: " + t + "<br/> Numéro de téléphone: " + n + "<br/> Message du user : " + o
  }).then(e => alert(e))
}

console.log("smtp");
