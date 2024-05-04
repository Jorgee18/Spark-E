"use strict";
const getUsuarios = (req, res) => {
    res.send("getUsuarios");
};
const getUsuariosByNombre = (req, res) => {
    res.send("getUsuariosByNombre");
};
module.exports = {
    getUsuarios,
    getUsuariosByNombre
};
