"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const getListRegiones = (req, res) => {
    try {
        const connection = importConnection();
        connection.query("SELECT * FROM regiones", function (error, results, fields) {
            res.send(JSON.stringify(results));
        });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const getRegionByCod = (req, res) => {
    try {
        const connection = importConnection();
        let cod_region = req.params.cod_region;
        connection.query("SELECT * FROM regiones WHERE cod_region = ?", [cod_region], function (error, results, fields) {
            res.send(JSON.stringify(results));
        });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const getListComunasByRegion = (req, res) => {
    try {
        const connection = importConnection();
        let cod_region = req.params.cod_region;
        connection.query("SELECT * FROM comunas WHERE cod_region = ?", [cod_region], function (error, results, fields) {
            res.send(JSON.stringify(results));
        });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const getComunaByCod = (req, res) => {
    try {
        const connection = importConnection();
        let cod_comuna = req.params.cod_comuna;
        connection.query("SELECT * FROM comunas WHERE cod_comuna = ?", [cod_comuna], function (error, results, fields) {
            res.send(JSON.stringify(results));
        });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
module.exports = {
    getListRegiones,
    getRegionByCod,
    getListComunasByRegion,
    getComunaByCod
};
