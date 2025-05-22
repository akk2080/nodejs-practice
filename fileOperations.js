const fs = require("fs");

const readFileData = (filePath) => {
    const data = fs.readFileSync(filePath, "utf-8");
    console.log(data);
}

const appendFileData = (filePath) => {
    fs.appendFileSync(filePath, " \nthis is the appended data");
    console.log("data appneded");
}

module.exports = {readFileData, appendFileData};