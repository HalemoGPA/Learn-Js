let divContainer = document.createElement("div").cloneNode(true);

let selectBox = document.createElement("select").cloneNode(true);
let option = document.createElement("option").cloneNode(true);
let optionList1 = ["Open", "Roboto", "Cairo"];
let optionList2 = ["red", "blue", "green", "yellow", "pink", "black"];

for (let i = 0; i < 3; i++) {
  option.value = optionList1[i].toLowerCase();
  let text = document.createTextNode(optionList1[i]);
  option.appendChild(text);
  selectBox.appendChild(option.cloneNode(true));
  if (selectBox.lastChild.value == window.localStorage.getItem("font-family")) {
    selectBox.lastChild.selected = true;
  }
  option.removeChild(option.lastChild);
}
selectBox.classList.add("font-family");

divContainer.appendChild(selectBox.cloneNode(true));
selectBox.classList.remove("font-family");
for (let i = 0; i < 3; i++) {
  selectBox.removeChild(selectBox.lastChild);
}
for (let i = 0; i < 6; i++) {
  option.value = optionList2[i].toLowerCase();
  let text = document.createTextNode(optionList2[i]);
  option.appendChild(text);
  selectBox.appendChild(option.cloneNode(true));
  if (selectBox.lastChild.value == window.localStorage.getItem("color")) {
    selectBox.lastChild.selected = true;
  }
  option.removeChild(option.lastChild);
}
selectBox.classList.add("color");

divContainer.appendChild(selectBox.cloneNode(true));
selectBox.classList.remove("color");
for (let i = 0; i < 6; i++) {
  selectBox.removeChild(selectBox.lastChild);
}
for (let i = 16; i < 16 + 15; i++) {
  option.value = i + "px";
  let text = document.createTextNode(i);
  option.appendChild(text);
  selectBox.appendChild(option.cloneNode(true));
  if (i == window.localStorage.getItem("font-size")) {
    selectBox.lastChild.selected = true;
  }
  option.removeChild(option.lastChild);
}
selectBox.classList.add("font-size");

divContainer.appendChild(selectBox.cloneNode(true));
selectBox.classList.remove("font-size");
for (let i = 16; i < 16 + 15; i++) {
  selectBox.removeChild(selectBox.lastChild);
}

document.body.prepend(divContainer);
let fontStorage = document.querySelector(".font-family");
let colorStorage = document.querySelector(".color");
let fontSizeStorage = document.querySelector(".font-size");
window.addEventListener("load", function (e) {
  fontStorage.value = this.window.localStorage.getItem("font-family");
  colorStorage.value = this.window.localStorage.getItem("color");
  fontSizeStorage.value = this.window.localStorage.getItem("font-size");
});
//
this.document.styleSheets[1].cssRules[0].style.setProperty(
  "--font-family-s",
  this.window.localStorage.getItem("font-family")
);
this.document.styleSheets[1].cssRules[0].style.setProperty(
  "--color-s",
  this.window.localStorage.getItem("color")
);
this.document.styleSheets[1].cssRules[0].style.setProperty(
  "--font-size-s",
  this.window.localStorage.getItem("font-size")
);
//

window.addEventListener("change", function (e) {
  if (e.target.classList.contains("font-family")) {
    this.window.localStorage.setItem("font-family", e.target.value);
  } else if (e.target.classList.contains("color")) {
    this.window.localStorage.setItem("color", e.target.value);
  } else if (e.target.classList.contains("font-size")) {
    this.window.localStorage.setItem("font-size", e.target.value);
  }
  if (1) {
    this.document.styleSheets[1].cssRules[0].style.setProperty(
      "--font-family-s",
      this.window.localStorage.getItem("font-family")
    );
    this.document.styleSheets[1].cssRules[0].style.setProperty(
      "--color-s",
      this.window.localStorage.getItem("color")
    );
    this.document.styleSheets[1].cssRules[0].style.setProperty(
      "--font-size-s",
      this.window.localStorage.getItem("font-size")
    );
  }
});
