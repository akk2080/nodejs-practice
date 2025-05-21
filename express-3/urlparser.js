const url = require('url');

const geturlInfo = (fullurl) => {
    return url.parse(fullurl, true);
}

module.exports = geturlInfo;