let nums = [2, 12, 11, 5, 10, 1, 99];
result = nums.reduce(function (acc, current) {
  return current % 2 == 0 ? acc * current : acc + current;
}, 1);
console.log(result);
// 500
