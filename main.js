let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Find smallest number in all variables and return integer
console.log(Math.round(Math.min(a, b, c, d)));
//Use variable a + d one time to get the output
console.log(a ** Math.trunc(d)); //10000
//get integer "2" from d variable with methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
//use variable b +d to get this value
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); //66.67 => string
console.log(Math.round(Math.floor(b) / Math.ceil(d))); // 67 => number
