let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

let res = haystack.includes(needle);
if (res) {
  console.log("Found");
}

let res1 = haystack.indexOf(needle);
if (res1 != -1) {
  console.log("Found");
}
let res2 = haystack.lastIndexOf(needle);
if (res2 != -1) {
  console.log("Found");
}
