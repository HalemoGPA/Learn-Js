let form = document.createElement("form");
let input = document.createElement("input");
let select = document.createElement("select");
let option = document.createElement("option");
let types = ["text", "password", "number"];
let languages = ["English", "Arabic", "Spanish", "German", "French"];
for (let i = 0; i < 3; i++) {
  input.setAttribute("type", types[i]);
  form.appendChild(input.cloneNode(true));
}
for (let i = 0; i < 5; i++) {
  option.setAttribute("value", languages[i]);
  let text = document.createTextNode(languages[i]);
  option.appendChild(text);
  select.appendChild(option.cloneNode(true));
  option.removeChild(option.lastChild);
}
form.appendChild(select);
document.body.prepend(form);
let inputText = document.querySelector("input[type=text]");
let inputPassword = document.querySelector("input[type=password]");
let inputNumber = document.querySelector("input[type=number]");
let selectLanguage = document.querySelector("select");
window.addEventListener("change", function (e) {
  window.sessionStorage.setItem("inputText", inputText.value);
  window.sessionStorage.setItem("inputPassword", inputPassword.value);
  window.sessionStorage.setItem("inputNumber", inputNumber.value);
  window.sessionStorage.setItem("selectLanguage", selectLanguage.value);
  inputText.value = window.sessionStorage.getItem("inputText");
  inputPassword.value = window.sessionStorage.getItem("inputPassword");
  inputNumber.value = window.sessionStorage.getItem("inputNumber");
  selectLanguage.value = window.sessionStorage.getItem("selectLanguage");
});
window.addEventListener("load", function (e) {
  inputText.value = window.sessionStorage.getItem("inputText");
  inputPassword.value = window.sessionStorage.getItem("inputPassword");
  inputNumber.value = window.sessionStorage.getItem("inputNumber");
  selectLanguage.value = window.sessionStorage.getItem("selectLanguage");
});
