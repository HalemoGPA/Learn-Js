let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
  if (i == start) continue;
  if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }
}
