const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");

//Analizador de solicitudes HTTP
var jsonParser = bodyParser.json();

//Configuración del servidor
const configuracion={
    port:3360,
    hostname:"127.0.0.1"
}

//Importación de las rutas a utilizar
const usuariosRoutes = require('./Routes/usuarios')(express);
const regionesComunasRoutes = require('./Routes/regionesComunas')(express);
app.use('/usuarios', usuariosRoutes);
app.use('/api.regiones-y-comunas-chile', regionesComunasRoutes);

/*
app.get('/',jsonParser,(req:any, res:any)=>{
    res.json("Hola Mundo");
});
*/

app.listen(configuracion,()=>{
      console.log(`Empezando servidor ${configuracion.hostname} en el puerto ${configuracion.port}`)
});

