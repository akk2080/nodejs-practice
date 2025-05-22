const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('server started on port 30000');
});

app.get('/home', (req, res) => {
    res.send('<h1>welcome to the home page</h1>');
});

app.get('/aboutus', (req, res) => {
    res.status(200).json({message:'welcome to aboout us'});
})

app.get('/contactus', (req, res) => {
    res.status(200).json({name:'zack', mail:'zack@gamil.com'});
});



