const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");

//Conexión con la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'spark-e'
});
connection.connect(function (err: any) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }

    console.log('💾 Conexión con la DB establecida ' + connection.threadId);
});

//Analizador de solicitudes HTTP
var jsonParser = bodyParser.json();

//Configuración del servidor
const configuracion = {
    port: 3360,
    hostname: "127.0.0.1"
}

//Importación de las rutas a utilizar
const usuariosRoutes = require('./routes/usuariosRoutes')(express);
const regionesComunasRoutes = require('./routes/regionesComunasRoutes')(express);
app.use('/usuarios', usuariosRoutes);
app.use('/api.regiones-y-comunas-chile', regionesComunasRoutes);


app.listen(configuracion, () => {
    console.log(`🚀 Empezando servidor ${configuracion.hostname} en el puerto ${configuracion.port}`)
});

module.exports = {
    connection,
    bodyParser
};