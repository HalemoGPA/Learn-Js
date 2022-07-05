div = document.querySelector("div");
let counter = setInterval(function () {
  div.textContent = +div.textContent - 1;
  if (+div.textContent === 5) {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400,height=400,top=200,left=600"
    );
  }
  if (+div.textContent === 0) {
    clearInterval(counter);
  }
}, 1000);
