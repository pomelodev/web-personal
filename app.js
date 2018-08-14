const express = require('express');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');

let sendMail = require("./mail");

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/public'));



app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});



app.post('/contact', (req,res)=>{
    sendMail(req.body.nombre, req.body.email, req.body.consulta);
    res.send("Enviado");
});


let port = process.env.PORT | 3000;
app.listen(port);