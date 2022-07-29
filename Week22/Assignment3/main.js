let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3} \(\d{4}\)/gi;
console.log(phone.match(phoneRe));
