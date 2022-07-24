let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let myInfoMap = new Map(Object.entries(myInfo));
console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));
