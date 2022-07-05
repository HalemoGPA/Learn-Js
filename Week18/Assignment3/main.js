div = document.querySelector("div");
let counter = setInterval(function () {
  div.textContent = +div.textContent - 1;
  if (+div.textContent === 0) {
    clearInterval(counter);
  }
}, 1000);
