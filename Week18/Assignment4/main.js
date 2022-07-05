div = document.querySelector("div");
let counter = setInterval(function () {
  div.textContent = +div.textContent - 1;
  if (+div.textContent === 0) {
    window.location.href = "https://elzero.org";
  }
}, 1000);
