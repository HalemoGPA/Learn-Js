let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
