let theName = "Elzero";
a1 = theName.split("");
a2 = Array.from(theName);
a3 = [...theName];
a4 = Array(...theName);
a5 = Array(theName)
  .map((x) => x.split(""))
  .flatMap((x) => x);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
