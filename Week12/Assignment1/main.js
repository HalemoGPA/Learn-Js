function sayHello(theName, theGender) {
  if (theGender === "Male") console.log(`Hello Mr ${theName}`);
  else if (theGender === "Female") console.log(`Hello Miss ${theName}`);
  else console.log(`Hello ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
