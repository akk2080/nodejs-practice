const os = require("os");

function getSystemInfo() {
  const cpus = os.cpus();

  console.log('Architecture            :', os.arch());
  console.log('CPU Cores               :', cpus.length);
  console.log('CPU Model               :', cpus[0].model);
  console.log('CPU Speed               :', cpus[0].speed);
  console.log('Total Memory            :', (os.totalmem() / (1024 * 1024 * 1024)).toFixed(0));
  console.log('Free Memory             :', (os.freemem() / (1024 * 1024 *1024)).toFixed(0));
  console.log('Hostname                :', os.hostname());
  console.log('OS Type                 :', os.type());
};

module.exports = getSystemInfo;