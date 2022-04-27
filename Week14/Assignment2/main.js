let myString = "EElllzzzzzzzeroo";
let arr = myString
  .split("")
  .filter(function (letter, index) {
    return letter !== myString[index + 1];
  })
  .reduce((acc, current) => acc + current);
console.log(arr);
