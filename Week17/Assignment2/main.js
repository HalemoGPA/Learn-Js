let currentElement = document.querySelector('[title="Current"]');
let toRemove = document.querySelector(".classes-to-remove");
let toAdd = document.querySelector(".classes-to-add");
spanParent = document.querySelector(".classes-list div");
toAdd.onblur = function () {
  spanParent.innerHTML = "";
  let value = toAdd.value.split(" ");
  for (let i = 0; i < value.length; i++) {
    valueLowered = value[i].toLowerCase();
    currentElement.classList.add(valueLowered);
    toAdd.value = "";
  }

  for (let i = 0; i < currentElement.classList.length; i++) {
    let span = document.createElement("span").cloneNode(true);
    spantext = document.createTextNode(currentElement.classList[i]);
    span.appendChild(spantext);
    spanParent.appendChild(span);
  }
};
toRemove.onblur = function () {
  spanParent.innerHTML = "";
  let value = toRemove.value.split(" ");
  for (let i = 0; i < value.length; i++) {
    valueLowered = value[i].toLowerCase();
    currentElement.classList.remove(valueLowered);
    toRemove.value = "";
  }
  for (let i = 0; i < currentElement.classList.length; i++) {
    let span = document.createElement("span").cloneNode(true);
    spantext = document.createTextNode(currentElement.classList[i]);
    span.appendChild(spantext);
    spanParent.appendChild(span);
  }
};
