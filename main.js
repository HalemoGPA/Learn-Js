/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop();
my.pop();
my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(length - counter, counter)); // ["Elham", "Mazero"]

console.log(
  my[my.length - counter].slice(zero, counter - true) +
    my[counter - true].slice(counter - true)
); // "Elzero"

console.log(
  my[counter - true].slice(my.length).toLowerCase().charAt(zero) +
    my[counter - true].slice(my.length + true).toUpperCase()
); // "rO"
