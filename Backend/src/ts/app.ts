const config = require('./config');
const express = require('express');
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');

//Conexión con la base de datos
const connection = mysql.createConnection(config.mysql);
connection.connect(function (err: any) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }

    console.log('💾 Conexión con la DB establecida ' + connection.threadId);
});

//Analizador de solicitudes HTTP
var jsonParser = bodyParser.json();

//Importación de las rutas a utilizar
const usuariosRoutes = require('./routes/usuariosRoutes');
const regionesComunasRoutes = require('./routes/regionesComunasRoutes');
const notificacionesRoutes = require('./routes/notificacionesRoutes');
app.use('/usuarios', usuariosRoutes);
app.use('/notificaciones', notificacionesRoutes);
app.use('/api.regiones-y-comunas-chile', regionesComunasRoutes);


app.listen(config.app, () => {
    console.log(`🚀 Empezando servidor ${config.app.hostname} en el puerto ${config.app.port}`)
});

module.exports = {
    connection,
    bodyParser
};