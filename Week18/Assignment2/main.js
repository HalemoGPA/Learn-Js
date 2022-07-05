let popup = function () {
  let myDiv = document.createElement("div");
  myDiv.classList = "my-div";
  myH2 = document.createElement("h2");
  myH2.textContent = "Welcome";
  myDiv.appendChild(myH2);
  myP = document.createElement("p");
  myP.textContent = "Welcome to Elzero Web School";
  myDiv.appendChild(myP);
  myButton = document.createElement("button");
  myButton.textContent = "X";
  myButton.addEventListener("click", function () {
    myDiv.remove();
  });
  myDiv.appendChild(myButton);
  setTimeout(function () {
    document.body.appendChild(myDiv);
  }, 5000);
};
popup();
