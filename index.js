const {isPrime} = require("./isPrime");
const factorial = require("./factorial");
const {readFileData, appendFileData} = require("./fileOperations");
const getSystemInfo = require("./getSystemInfo");


isPrime(5);
isPrime(6);
isPrime(1);
isPrime(2);


factorial(1);
factorial(4);
factorial(0);
factorial(8);

readFileData("./data");
appendFileData("./data");

getSystemInfo();
