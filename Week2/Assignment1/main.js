let numberOne = 10,
  numberTwo = 20;
// normal concatinate
console.log(numberOne + "" + numberTwo);
// type of data using normal concatinate
console.log(typeof (numberOne + "" + numberTwo));
//using template literals
console.log(`${numberOne}${numberTwo}`);
//type of data using template literals
console.log(typeof `${numberOne}${numberTwo}`);
//using normal concatinate 20 then newline then 10
console.log(numberTwo + "\n" + numberOne);
//using template literals 20 then newline then 10
console.log(`${numberTwo}\n${numberOne}`);
