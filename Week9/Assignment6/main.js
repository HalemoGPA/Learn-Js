let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1
  .concat(arr2)
  .sort()
  .splice(arr2.length, arr1.length)
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy
