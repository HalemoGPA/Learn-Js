let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(Number(num) + Number(num)); // 20

// Solution Three
console.log(num - -num); // 20

// Solution Four
console.log((num * num) / (num >> true)); // 20
