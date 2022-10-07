// ///////*******************************************///////
// ///////************ CHANGE LANGUAGES *************///////
// ///////*******************************************///////
// INITIALIZATION OF THE LANGUAGE SWITCHER BY FINDING THE RIGHT JSON OF THE LANG
function Translate() {
    this.init = function (e, t) {
        this.attribute = e, this.lng = t
    }, this.process = function () {
        _self = this;
        var a = new XMLHttpRequest;
        a.open("GET", "assets/languages/" + this.lng + ".json", !1), a.onreadystatechange = function () {
            if (4 === a.readyState && (200 === a.status || 0 == a.status))
                for (var e = JSON.parse(a.responseText), t = document.getElementsByTagName("*"), n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = s.getAttribute(_self.attribute);
                    null != r && (s.innerHTML = e[r])
                }
        }, a.send()
    }
}
const dropdowns = document.querySelectorAll(".dropdown");

function translate(e, t) {
    var n = new Translate;
    n.init(t, e), n.process()
}
dropdowns.forEach(e => {
    const t = e.querySelector(".select"),
        n = e.querySelector(".caret"),
        s = e.querySelector(".menu"),
        r = e.querySelectorAll(".menu li"),
        a = e.querySelector(".selected");
    t.addEventListener("click", () => {
        t.classList.toggle("select-clicked"), n.classList.toggle("caret-rotate"), s.classList.toggle("menu-open")
    }), r.forEach(e => {
        e.addEventListener("click", () => {
            a.innerText = e.innerText, t.classList.remove("select-clicked"), n.classList.remove("caret-rotate"), s.classList.remove("menu-open"), r.forEach(e => {
                e.classList.remove("active")
            }), e.classList.add("active")
        })
    })
});
const enTranslator = document.getElementById("enTranslator"),
    frTranslator = document.getElementById("frTranslator");
document.addEventListener("DOMContentLoaded", () => {
    enTranslator.addEventListener("click", () => {
        translate("en", "lng-tag")
    }), frTranslator.addEventListener("click", () => {
        translate("fr", "lng-tag")
    })
});