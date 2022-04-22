let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words
    .reverse()[0][0]
    .slice(website.length, website.length + words.length + true)
    .toUpperCase()
); // ZERO
