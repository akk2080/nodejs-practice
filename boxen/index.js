const boxen = require("boxen");

const title = "Hurray!";
let message = "I am using my first external module!";

console.log(boxen(message, {title,  titleAlignment:'center', borderStyle:'classic'}));
console.log(boxen(message, {title, titleAlignment:'center', borderStyle:'singleDouble'}))
console.log(boxen(message, {title, titleAlignment:'center', borderStyle:'round', padding: 1, backgroundColor:'yellow'}));


