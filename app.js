const express = require('express');
const app = express();

let sendMail = require("./mail");

app.use(express.json());
app.use(express.urlencoded());



app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/contact', (req,res)=>{
    sendMail(req.body.nombre, req.body.email, req.body.consulta);
    res.redirect('/');
});


let port = process.env.PORT | 3000;
app.listen(port);