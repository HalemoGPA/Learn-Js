let a = 21;
let b = 20;
let d = a,
  e = b;
let c = `${e}${d}`;
console.log(`_${d}_${(c + "_").repeat(3)}${e}_`);
