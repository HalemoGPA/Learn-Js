let dateNow = new Date();
let dateLastMonth = new Date();
dateLastMonth.setMonth(dateNow.getMonth() - 1);
let m = dateLastMonth.getMonth();
if (m == 0 || m == 2 || m == 4 || m == 6 || m == 7 || m == 9 || m == 11) {
  dateLastMonth.setDate(31);
} else if (m == 3 || m == 5 || m == 8 || m == 10) {
  dateLastMonth.setDate(30);
} else if (m == 1) {
  dateLastMonth.setDate(28);
}
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(dateLastMonth);
console.log(
  `Previous Month Is ${
    months[dateLastMonth.getMonth()]
  } And Last Day Is ${dateLastMonth.getDate()}`
);
