const express = require("express");
const readFileData = require("./read");
const getSystemDetails = require("./systemdetails");
const dns = require('dns');



const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Test route is working');
});

app.get('/readfile', (req, res) => {
    
    const data = readFileData();
    console.log(data);
    res.send(data);
});

app.get('/systemdetails', (req, res) => {

    res.json(getSystemDetails());
});

app.get('/getip', (req, res) => {
    const url = 'masaischool.com';

    dns.lookup(url, (err, address, family) => {
        if (err) {
            return res.status(500).send('Error resolving IP address');
        }
        res.json({hostname: url, ipAddress: address});
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});