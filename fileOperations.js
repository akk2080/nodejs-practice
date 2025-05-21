const fs = require("fs");

const readFileData = () => {
    const data = fs.readFileSync("./data.txt", "utf-8");
    console.log(data);
}

const appendFileData = () => {
    fs.appendFileSync("./data.txt", " \nthis is the appended data");
    console.log("data appneded");
}

module.exports = {readFileData, appendFileData};