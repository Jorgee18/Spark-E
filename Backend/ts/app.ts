const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");

var jsonParser = bodyParser.json();

const configuracion={
    port:3360,
    hostname:"127.0.0.1"
}

app.get('/',jsonParser,(req:any, res:any)=>{
    res.json("Hola Mundo");
});

app.listen(configuracion,()=>{
      console.log(`Empezando servidor ${configuracion.hostname} en el puerto ${configuracion.port}`)
});