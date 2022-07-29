let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /(\w+\d+:){7}/gi;
console.log(ip.match(ipRe));
