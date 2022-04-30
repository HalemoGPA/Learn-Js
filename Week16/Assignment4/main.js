let myFirstDiv = document.querySelector(".one");
let mySecondDiv = document.querySelector(".two");
let textTemp = myFirstDiv.textContent;
let classTemp = myFirstDiv.className;
let titleTemp = myFirstDiv.title;
myFirstDiv.textContent = mySecondDiv.textContent;
myFirstDiv.className = mySecondDiv.className;
myFirstDiv.title = mySecondDiv.title;
mySecondDiv.textContent =
  textTemp +
  document.body.firstChild.textContent +
  document.querySelectorAll("div").length;
mySecondDiv.className = classTemp;
mySecondDiv.title = titleTemp;
