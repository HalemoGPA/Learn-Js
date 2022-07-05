let answer = prompt("Print Number From – To");
let answerNums = answer.split("-");
let start = Math.min(...answerNums);
let end = Math.max(...answerNums);
for (let i = start; i <= end; i++) {
  console.log(i);
}
