let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(+[...setOfNumbers].slice(setOfNumbers.size - 1));
