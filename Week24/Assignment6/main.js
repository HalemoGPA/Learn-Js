function* gen() {
  yield 14;
  yield 140 + 14;
  yield 140 + 14 + 340;
  let arr = [14, 140, 340];
  let sumArr;
  while (true) {
    arr.push(arr[arr.length - 1] + 200);
    sumArr = arr.reduce((a, b) => a + b);
    yield sumArr;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
