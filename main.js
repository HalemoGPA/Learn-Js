let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a as myNum, arr, saySomething };

export default function () {
  return `Hello`;
}
