function multiply(...numbers) {
  let result = 1;
  if (numbers.length === 0) {
    console.log(0);
    return 0;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") continue;
    else {
      result *= Math.floor(numbers[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
