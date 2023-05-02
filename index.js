const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Recipe and chefs is running')

});

app.listen(port, () =>{
    console.log(`Recipe Api is running port: ${port}`)
})