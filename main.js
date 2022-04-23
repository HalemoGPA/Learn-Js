/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

let end = myAdmins.indexOf("Stop");
myAdmins.splice(end, myAdmins.length - end);
document.write(`<div>We have ${myAdmins.length} Admins</div><hr>`);
for (let i = 0; i < myAdmins.length; i++) {
  let empiterator = 0;
  document.write(`<div>The Admin for team ${i + 1} is ${myAdmins[i]}</div>`);
  document.write(`<h2>Team Members : </h2>`);
  for (let j = 0; j < myEmployees.length; j++)
    if (myAdmins[i][0] === myEmployees[j][0]) {
      document.write(`<div>- ${empiterator + 1} ${myEmployees[j]}</div>`);
      empiterator++;
    }
  document.write("<hr>");
}
