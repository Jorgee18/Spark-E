"use strict";
const getRegiones = (req, res) => {
    res.send("getRegiones");
};
const getComunasByCod = (req, res) => {
    res.send("getComunasByCod");
};
module.exports = {
    getRegiones,
    getComunasByCod
};
