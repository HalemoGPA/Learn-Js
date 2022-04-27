let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newarr = numsAndStrings
  .filter(function (character) {
    return !isNaN(character);
  })
  .map(function (character) {
    return -character;
  });
console.log(newarr);
// [-1, -10, 10, 20, -5, -3]
