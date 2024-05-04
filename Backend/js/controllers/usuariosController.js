"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const importBodyParser = () => require("../app").bodyParser;
const getUsuarios = (req, res) => {
    const connection = importConnection();
    res.send("getUsuarios");
};
const getUsuariosByNombre = (req, res) => {
    const connection = importConnection();
    res.send("getUsuariosByNombre");
};
module.exports = {
    getUsuarios,
    getUsuariosByNombre
};
