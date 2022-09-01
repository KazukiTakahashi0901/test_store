/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./preassets/ts/index.ts ***!
  \*******************************/
var emailInput = document.getElementById("contact-email");
var emailConfInput = (document.getElementById("contact-email-conf"));
var contactSubmitBtn = (document.getElementById("contact-submit"));
emailConfInput.addEventListener("input", function (e) {
    var emailValue = emailInput.value;
    if (!(e.target instanceof HTMLInputElement)) {
        return;
    }
    if (emailValue !== e.target.value) {
        emailConfInput.classList.add("inValid");
        contactSubmitBtn.setAttribute("disabled", "true");
    }
    else {
        emailConfInput.classList.remove("inValid");
        contactSubmitBtn.removeAttribute("disabled");
    }
});

/******/ })()
;
//# sourceMappingURL=main.js.map