const fs = require('fs');

const readFileData = () => {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    return data;
}

module.exports = readFileData;