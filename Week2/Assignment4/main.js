let a = 21;
let b = 20;
let d = a;
let dd = a;
let e = b;
let ee = b;
let c = d + "" + e;
console.log(`_${d}_${(c + "_").repeat(++dd % --ee)} ${++e}_`);
