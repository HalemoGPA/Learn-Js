let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let numOfnums = chars.filter((x) => typeof x === "number");
let newarr = [...numOfnums, ...chars.filter((x) => typeof x === "string")];
console.log(newarr.copyWithin(0, numOfnums.length, numOfnums.length * 2));
