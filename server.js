const express = require('express');
const magicItems = require('./data.js');
const cors = require('cors');
const app = express();
app.use(cors()); 

app.get('/magicItems', (req, res) => {
    res.json(magicItems);
});

app.get('/magicItems/:id', (req, res) => {   
    const id = Number(req.params.id);

    const item = magicItems.find((singleItem) => singleItem.id === id);
    res.json(item);
});

module.exports = app;