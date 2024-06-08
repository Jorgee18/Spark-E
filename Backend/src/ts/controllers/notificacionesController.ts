const importConnection = () => require("../app").connection;
const importBodyParser = () => require("../app").bodyParser;

const getNotificaciones = (req:any, res:any) => {
    try {
        const connection = importConnection();
        res.send("getNotificaciones");
    } catch (error: any) {
        res.status(500);
        res.send(error.message);
    }
};

const getNotificacionesByNombre = (req:any, res:any) => {
    try {
        const connection = importConnection();
        res.send("getNotificacionesByNombre");
    } catch (error: any) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = {
    getNotificaciones,
    getNotificacionesByNombre
};