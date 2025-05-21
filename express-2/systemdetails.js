const os = require('os');

const getSystemDetails = () => {
    const cpus = os.cpus();

    const platform = os.type();
    const totalMemory = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(0);
    const freeMemory = (os.freemem() / (1024 * 1024 *1024)).toFixed(0);
    const cpuModel = cpus[0].model;

    return {
        platform,
        totalMemory,
        freeMemory,
        cpuModel
    }
        
}

module.exports = getSystemDetails;