import { describe } from "node:test";

const importConnection = () => require("../app").connection;
const importBodyParser = () => require("../app").bodyParser;

const getNotificaciones = (req: any, res: any) => {
    try {
        const connection = importConnection();
        connection.query("SELECT * FROM notificaciones", function(error:any,results:any,fields:any){
            res.send(JSON.stringify(results));
        });
    } catch (error: any) {
        res.status(500);
        res.send(error.message);
    }
};

const getNotificacionesById = (req: any, res: any) => {
    try {
        const connection = importConnection();
        let id_notificacion = req.params.id_notificacion;
        connection.query("SELECT * FROM notificaciones WHERE id_notificación = ?", [id_notificacion],function(error:any,results:any,fields:any){
            res.send(JSON.stringify(results));
        });
    } catch (error: any) {
        res.status(500);
        res.send(error.message);
    }
};

const crearNotificacion = (req: any, res: any) => {
    const connection = importConnection();
    // Obtén los datos del cuerpo de la solicitud
    const { titulo, descripcion } = req.body;
    console.log('Datos recibidos:', { titulo, descripcion });
    const fecha = new Date();
    const estado = false;

    const sql = 'INSERT INTO notificaciones (titulo, fecha, descripcion, estado) VALUES (?, ?, ?, ?)';
    const values = [titulo, fecha, descripcion, estado];
    // Ejecuta la consulta
    connection.query(sql, values, (err: any, results: any) => {
        if (err) {
            console.error('Error al insertar los datos en la base de datos:', err.stack);
            return res.status(400).json({ message: 'Error al guardar la notificación' });
        }

        console.log('Datos insertados en la base de datos:', { titulo, fecha, descripcion, estado });
        res.status(201).json({ message: 'Notificacion registrada con éxito' });
    });
};

const eliminarNotificacion = (req: any, res: any) => {
    const connection = importConnection();
    let eliminarValido = true;
    let id_notificacion = req.params.id_notificacion;
    connection.query("SELECT * FROM notificaciones WHERE id_notificación = ?", [id_notificacion],function(err:any,results:any,fields:any){
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        if (results.length == 0) {
            eliminarValido = false
            // Si la notificación no existe, enviar un mensaje de confirmación
            return res.status(400).json({ message: 'La notificacion con ese id no existe.' });
        }
    });
    if(eliminarValido){
        const sql = 'DELETE FROM notificaciones WHERE id_notificación = ? (id_notificación) VALUES (?)';
        const values = [id_notificacion];
    
        try {
            connection.query(sql, values, (err:any, results:any) => {
                if (err) {
                    console.error('Error al eliminar los datos de la base de datos:', err.stack);
                    return res.status(400).json({ message: 'Error al eliminar la notificación' });
                }
        
                console.log('Datos eliminados en la base de datos:', { id_notificacion });
                res.status(201).json({ message: 'Notificación eliminada con éxito' });
            });
        } catch (error: any) {
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