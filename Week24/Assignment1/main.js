let birthdate = new Date() - new Date("2002-02-02");
console.log(`${Math.floor(birthdate / 1000)} Seconds`);
console.log(`${Math.floor(birthdate / 1000 / 60)} Minutes`);
console.log(`${Math.floor(birthdate / 1000 / 60 / 60)} Hours`);
console.log(`${Math.floor(birthdate / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.floor(birthdate / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.floor(birthdate / 1000 / 60 / 60 / 24 / 365)} Years`);
