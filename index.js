const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Recipe and chefs is running')

});

app.get('/chefs',(req, res) =>{
    res.send(chefs);
})

app.get('/chefs/:id',(req, res) =>{
    const id = req.params.id ;
    // console.log(id);
    const selectedChefs = chefs.find(c=> c._id === id);
    res.send(selectedChefs)
})

app.listen(port, () =>{
    console.log(`Recipe Api is running port: ${port}`)
})