function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let arr = zName.split(" ");
    agentName = arr[0] + " " + arr[1][0].toUpperCase() + ".";
    return agentName;
  }
  function ageWithMessage(zAge) {
    let arr = zAge.split(" ");
    agentAge = `Your Age Is ` + arr[0];
    return agentAge;
  }
  function countryTwoLetters(zCountry) {
    arr = zCountry.split("");
    return `You Live In ${(arr[0] + arr[1]).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
