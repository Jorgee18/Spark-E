"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const importBodyParser = () => require("../app").bodyParser;
const getNotificaciones = (req, res) => {
    try {
        const connection = importConnection();
        res.send("getNotificaciones");
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const getNotificacionesByNombre = (req, res) => {
    try {
        const connection = importConnection();
        res.send("getNotificacionesByNombre");
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
module.exports = {
    getNotificaciones,
    getNotificacionesByNombre
};
