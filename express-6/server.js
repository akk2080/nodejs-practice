const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());


app.listen(3000, () => {
    console.log('server started at port 3000');
});


app.get('/dishes', (req, res) => {
    const data = fs.readFileSync('./db.json', 'utf-8');
    if(!data){
        res.status(200).send('no data to show');
    }
    
    data = JSON.parse(data);
    
    res.status(200).json(data);
});

app.post('/dishes', (req, res) => {
    let data = fs.readFileSync('./db.json', 'utf-8');
    if(!data){
        data = [];
    }else{
        data = JSON.parse(data);
    }
  
    data.push(req.body);
    fs.writeFileSync('./db.json', JSON.stringify(data));
   
    res.status(201).json(data[data.length-1]);
});

app.get('/dishes/get', (req, res) => {
    const {name} = req.query;
    let data = fs.readFileSync('./db.json', 'utf-8');
 
    if(!data){
        data = [];
        res.send('no data to show');
    }else{
        data = JSON.parse(data);
      
    }

    const dish = data.filter((d) => {
        return d.name.toLowerCase() == name.toLowerCase();
    });
    
    
    if(dish.length == 0){
        res.json({ message: "No dishes found" });
    }
    else{
        res.json(dish);
    }


})


app.all('/{*any}', (req, res) => {
    res.status(404).json({ error: "404 Not Found" });
});