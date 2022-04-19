let a = 21;
let b = 20;
let dd = (d = a);
let ee = (e = b);
let c = d + "" + e;
console.log(`_${d}_${(c + "_").repeat(++dd % --ee)} ${++e}_`);
