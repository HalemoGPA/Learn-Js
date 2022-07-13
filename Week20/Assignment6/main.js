let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, avaiable: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, avaiable: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, avaiable: true, skills: ["PHP", "Laravel"] },
];

function getFriend(choosed) {
  function destruct(
    { title, age, avaiable, skills: [, skill] } = myFriends[choosed - 1]
  ) {
    console.log(title);
    console.log(age);
    avaiable ? console.log("Available") : console.log("Not Available");
    console.log(skill);
  }
  destruct();
}
getFriend(chosen);
