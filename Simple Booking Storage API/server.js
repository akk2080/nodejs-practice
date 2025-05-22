const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
app.listen(3000, () => {
    console.log('server started at port 3000');
});

const readData = () => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    return data;
};

const writerData = (data) => {
   
    fs.writeFileSync('./db.json', JSON.stringify(data));
}

app.get('/books', (req, res) => {
    const data = readData();
    if(data.length == 0){
        res.status(200).json({message: 'no data to show'});
    }else
        res.status(200).json(data);
});

app.post('/books', (req, res) => {
    const newdata = req.body;
    const data = readData();
    data.push(newdata);

    writerData(data);

    res.status(201).json(newdata);
});

app.get('/books/search', (req, res) => {
    const author = req.query.author?.toLowerCase();
    if(!author){
        res.status(400).json({message: 'author query is required'});
    }
    else{
        const data = readData();
        console.log(data);

        const filteredData = data.filter((b) => {
            return b.author.toLowerCase().includes(author);
        });

        if(filteredData.length == 0){
            res.status(404).json({message: 'No books found'});
        }
        else{
            res.status(200).json(filteredData);
        }
    }
    
});

app.get('/books/:id', (req, res) => {
    const data = readData();
    const id = req.params.id;
    const index = data.findIndex((b) => {
       return b.id == id
    });
    if(index == -1){
        res.status(404).json({message: 'book with this id is not found'});
    }else{
        res.status(200).json(data[index]);
    }

});

app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const data = readData();
    const index = data.findIndex((b) => {
       return b.id == id
    });
    if(index == -1){
        res.status(404).json({message: 'book with this id is not found'});
    }else{
        data[index] = {...data[index], ...req.body};
        writerData(data);
        res.status(200).json(data[index]);
    }

    

});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const data = readData();
    const filteredData = data.filter((b) => {return b.id != id});
   
    if(filteredData.length == data.length){
        res.status(404).json({message: 'book with this id is not found'});
    }else{
        writerData(filteredData);
        res.status(200).json({message: 'book is removed successfully'});
    }

});





app.all('/{*any}', (req, res) => {
    res.status(404).json({ error: "404 Not Found" });
});