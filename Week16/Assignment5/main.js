let myImages = document.querySelectorAll("img");
for (let i = 0; i < myImages.length; i++) {
  if (myImages[i].alt == "") {
    myImages[i].alt = "Elzero New";
  } else {
    myImages[i].alt = "Old";
  }
}
