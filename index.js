const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const recipes = require('./data/recipes.json');



app.use(cors());

app.get('/', (req, res) =>{
    res.send('Recipe and chefs is running')

});

app.get('/recipes',(req, res) =>{
    res.send(recipes);
})

app.get('/recipes/:id',(req, res) =>{
    const id = req.params.id ;
    // console.log(id);
    const selectedRecipes = recipes.find(r=> r._id === id);
    res.send(selectedRecipes)
})

app.listen(port, () =>{
    console.log(`Recipe Api is running port: ${port}`)
})