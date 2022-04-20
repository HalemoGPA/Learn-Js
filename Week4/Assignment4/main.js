let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(Number.parseFloat(Number.parseFloat(myVar).toFixed(2))); // 100.57
