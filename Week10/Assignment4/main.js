let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  if (index <= jump) break;
  console.log(index);
  index -= jump;
}
