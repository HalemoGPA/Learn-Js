let divElement = document.getElementsByTagName("div")[0];
let myInput = document.getElementsByTagName("input")[0];

myInput.oninput = function () {
  let value = parseFloat(myInput.value);
  if (myInput.value == "") {
    divElement.textContent = "{0} USD Dollar = {0} Egyptian Pound";
  } else {
    divElement.textContent = `${value.toFixed(2)} USD Dollar = ${(
      value * 15.6
    ).toFixed(2)} Egyptian Pound`;
  }
};
