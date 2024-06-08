"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const importBodyParser = () => require("../app").bodyParser;
const getUsuarios = (req, res) => {
    try {
        const connection = importConnection();
        res.send("getUsuarios");
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const getUsuariosByNombre = (req, res) => {
    try {
        const connection = importConnection();
        res.send("getUsuariosByNombre");
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
module.exports = {
    getUsuarios,
    getUsuariosByNombre
};
