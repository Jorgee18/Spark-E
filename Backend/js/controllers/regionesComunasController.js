"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const getListRegiones = (req, res) => {
    const connection = importConnection();
    connection.query("SELECT * FROM regiones", function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
};
const getRegionByCod = (req, res) => {
    const connection = importConnection();
    let cod_region = req.params.cod_region;
    connection.query("SELECT * FROM regiones WHERE cod_region = ?", [cod_region], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
};
const getListComunasByRegion = (req, res) => {
    const connection = importConnection();
    let cod_region = req.params.cod_region;
    connection.query("SELECT * FROM comunas WHERE cod_region = ?", [cod_region], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
};
const getComunaByCod = (req, res) => {
    const connection = importConnection();
    let cod_comuna = req.params.cod_comuna;
    connection.query("SELECT * FROM comunas WHERE cod_comuna = ?", [cod_comuna], function (error, results, fields) {
        res.send(JSON.stringify(results));
    });
};
module.exports = {
    getListRegiones,
    getRegionByCod,
    getListComunasByRegion,
    getComunaByCod
};
