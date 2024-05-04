"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const getRegiones = (req, res) => {
    const connection = importConnection();
    connection.query("SELECT * FROM regiones", function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
};
const getComunasByCod = (req, res) => {
    const connection = importConnection();
    let cod_region = req.params.cod_region;
    connection.query("SELECT * FROM comunas WHERE cod_region = ?", [cod_region], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
};
module.exports = {
    getRegiones,
    getComunasByCod
};
