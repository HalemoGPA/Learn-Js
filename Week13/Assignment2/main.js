// function itsMe() {
//     return `Iam A Normal Function`;
//   }

itsMe = (_) => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}/HalemoGPA`;

console.log(urlCreate("https", "github", "com")); // https://www.elzero.org
//https://github.com/HalemoGPA
