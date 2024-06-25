"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const importBodyParser = () => require("../app").bodyParser;
const getNotificaciones = (req, res) => {
    try {
        const connection = importConnection();
        connection.query("SELECT * FROM notificacion", function (error, results, fields) {
            res.send(JSON.stringify(results));
        });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const getNotificacionesById = (req, res) => {
    try {
        const connection = importConnection();
        let id_notificacion = req.params.id_notificacion;
        connection.query("SELECT * FROM notificacion WHERE id_notificación = ?", [id_notificacion], function (error, results, fields) {
            res.send(JSON.stringify(results));
        });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
    /*
    Actualizar el estado a "visto"
    */
};
const crearNotificacion = (req, res) => {
    const connection = importConnection();
    // Obtén los datos del cuerpo de la solicitud
    const { titulo, descripcion } = req.body;
    console.log('Datos recibidos:', { titulo, descripcion });
    const fecha = new Date();
    const estado = false;
    const sql = 'INSERT INTO notificacion (titulo, fecha, descripción, estado) VALUES (?, ?, ?, ?)';
    const values = [titulo, fecha, descripcion, estado];
    // Ejecuta la consulta
    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al insertar los datos en la base de datos:', err.stack);
            return res.status(400).json({ message: 'Error al guardar la notificación' });
        }
        console.log('Datos insertados en la base de datos:', { titulo, fecha, descripcion, estado });
        res.status(201).json({ message: 'Notificacion registrada con éxito' });
    });
};
const eliminarNotificacion = (req, res) => {
    const connection = importConnection();
    let eliminarValido = true;
    let id_notificacion = req.params.id_notificacion;
    connection.query("SELECT * FROM notificacion WHERE id_notificación = ?", [id_notificacion], function (err, results, fields) {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        if (results.length == 0) {
            eliminarValido = false;
            // Si la notificación no existe, enviar un mensaje de confirmación
            return res.status(400).json({ message: 'La notificacion con ese id no existe.' });
        }
    });
    if (eliminarValido) {
        const sql = 'DELETE FROM notificacion WHERE id_notificación = ?';
        const values = [id_notificacion];
        try {
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error('Error al eliminar los datos de la base de datos:', err.stack);
                    return res.status(400).json({ message: 'Error al eliminar la notificación' });
                }
                console.log('Datos eliminados en la base de datos:', { id_notificacion });
                res.status(201).json({ message: 'Notificación eliminada con éxito' });
            });
        }
        catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
};
module.exports = {
    getNotificaciones,
    getNotificacionesById,
    crearNotificacion,
    eliminarNotificacion
};
