function specialMix(...data) {
  sum = 0;
  for (let i = 0; i < data.length; i++) {
    let num = parseInt(data[i]);
    if (isNaN(num)) {
      num = 0;
    }
    sum += +num;
  }
  return sum == 0 ? "All Is Strings" : sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
