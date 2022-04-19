let theTitle = "Elzero",
  theDescription = "Elzero Web School",
  theDate = "25/10";
let markup = `<div>
    <h3>Hello ${theTitle}</h3>
    <p>${theDescription}</p>
    <span>${theDate}</span>
</div>`;
document.write(markup.repeat(4));
