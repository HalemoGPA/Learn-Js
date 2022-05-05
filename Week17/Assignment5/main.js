document.onclick = function (event) {
  event.preventDefault();
  console.log(`This is ${event.target.nodeName}`);
};
