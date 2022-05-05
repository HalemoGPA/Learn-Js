let span = document.querySelector("div span");
let wordBefore = span.nextSibling.nextSibling.nextSibling;
let wordAfter = wordBefore.textContent.trim();
console.log(wordAfter);
