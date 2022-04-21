let a = "Elzero Web School";
// output zero using slice and charAt
console.log(a.slice(a.indexOf(a.charAt(2)), a.indexOf(a.charAt(2)) + 4));
//output HHHHHHHHH
console.log(
  a
    .charAt(a.length - 4)
    .toUpperCase()
    .repeat(8)
);
//return array
console.log(a.split(" ", 1));
// use substr and template literals to output Elzero School
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`);
//dynamic output like elzero Web School
console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, -1).toUpperCase() +
    a.charAt(-1).toLowerCase() +
    a[a.length - 1].toLowerCase()
);
