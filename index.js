const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const app = express();


const port = 8000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

const path = require('path');
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in the running the server : ${err} `)
    }
    console.log(`Server in running on port: ${port}`);
});