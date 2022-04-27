let myArray = ["E", "l", "z", ["e", "r"], "o"];
let arr = myArray
  .reduce(function (acc, current) {
    return acc + current;
  })
  .split(",")
  .reduce((acc, current) => acc + current);
console.log(arr);
