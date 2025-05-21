const path = require('path');

const getFileInfo = (filePath) => {

    const info = path.parse(filePath);
    
    const filename = info.base;
    const extension = info.ext;
    const directory = info.dir;

    return {
        filename,
        extension,
        directory
    }
    
}

module.exports = getFileInfo;