let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = letter.indexOf(letter); i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    friends.splice(i, letter.length);
  }
}
for (let i = letter.indexOf(letter); i < friends.length; i++) {
  console.log(`${i + letter.length} => ${friends[i]}`);
}
