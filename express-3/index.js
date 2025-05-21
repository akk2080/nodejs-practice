const express = require('express');
const getFileInfo = require('./fileinfo');
const geturlInfo = require('./urlparser');
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('server started on port 3000');
});

app.get('/test', (req, res) => {
    res.send('testing route');
});

app.get('/fileinfo', (req, res) => {
    
    res.json(getFileInfo(req.query.filepath));
});

app.get('/parseurl', (req, res) => {
    res.json(geturlInfo(req.query.url));
})




