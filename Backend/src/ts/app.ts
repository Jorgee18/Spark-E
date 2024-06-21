const config = require('./config');
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const auth = require('./auth');

//Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

//Conexión con la base de datos
const connection = mysql.createConnection(config.mysql);
connection.connect(function (err: any) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }

    console.log('💾 Conexión con la DB establecida ' + connection.threadId);
});

//Importación de las rutas a utilizar
const usuariosRoutes = require('./routes/usuariosRoutes');
const regionesComunasRoutes = require('./routes/regionesComunasRoutes');
const notificacionesRoutes = require('./routes/notificacionesRoutes');
app.use('/usuarios', usuariosRoutes);
app.use('/notificaciones', auth.verifyToken, notificacionesRoutes);
app.use('/api.regiones-y-comunas-chile', regionesComunasRoutes);

app.listen(config.app, () => {
    console.log(`🚀 Empezando servidor ${config.app.hostname} en el puerto ${config.app.port}`)
});

module.exports = {
    connection
};