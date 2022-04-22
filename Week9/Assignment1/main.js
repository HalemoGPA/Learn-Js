let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
let myFriends2 = myFriends;
myFriends2.pop();
// Method 1
console.log(myFriends2); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(false, num)); // ["Ahmed", "Elham", "Osama"];
