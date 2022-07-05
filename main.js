let button = document.querySelector("button");
window.addEventListener("scroll", function () {
  if (
    window.scrollY >= window.innerHeight ||
    window.scrollX > this.window.innerWidth
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});
button.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
