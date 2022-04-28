//
objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

//
objMethodTwo = new Object({ property: "Method Two" });
console.log(objMethodTwo.property); // "Method Two"

//
objMethodThree = Object.create({ property: "Method Three" });
console.log(objMethodThree.property); // "Method Three"

//
objMethodFour = Object.assign({ property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"
