let theNumber = 100020003000;
console.log(
  +[...new Set(theNumber.toString())]
    .filter(function (e) {
      return +e;
    })
    .join("")
);
