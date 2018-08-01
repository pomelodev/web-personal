const express = require('express');
const app = express();

let sendMail = require("./mail")

app.use(express.json());
app.use(express.urlencoded());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req,res)=>{
    res.send("Hello Pomelo!");
});

app.get('/contact', (req,res)=>{
    sendMail("prueba@prueba.com", "Santiago", "Esto es una prueba");
});


let port = process.env.PORT | 3000;
app.listen(port);