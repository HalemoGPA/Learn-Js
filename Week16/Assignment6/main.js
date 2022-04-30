let type = document.querySelector("select");
let theResult = document.getElementsByClassName("results")[0];
let number = document.querySelector('[name="elements"]');
let text = document.querySelector('[name="texts"]');
document.forms[0].onsubmit = function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  let section = document.createElement("section");
  let divText = document.createTextNode(text.value);
  let sectionText = document.createTextNode(text.value);
  div.setAttribute("class", "box");
  div.setAttribute("title", "Element");
  section.setAttribute("class", "box");
  section.setAttribute("title", "Element");
  div.appendChild(divText);
  section.appendChild(sectionText);
  if (type.value == "Div") {
    for (let i = 0; i < Number(number.value); i++) {
      div.setAttribute("id", `id-${i + 1}`);
      theResult.appendChild(div.cloneNode(true));
    }
  } else {
    for (let i = 0; i < Number(number.value); i++) {
      section.setAttribute("id", `id-${i + 1}`);
      theResult.appendChild(section.cloneNode(true));
    }
  }
};
