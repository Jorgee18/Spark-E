"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const config = require('./config');
const express = require("express");
const importConnection = () => require("../app").connection;
function generateToken(user) {
    const token = jwt.sign(user, config.jwtSecret, { expiresIn: '3h' });
    return token;
}
const verifyToken = express.Router();
verifyToken.use((req, res, next) => {
    const token = req.headers["access-token"];
    if (!token) {
        return res.status(403).send('El Token no ha sido proporcionado');
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).send('Fallo en la autenticación del token');
        }
        else {
            req.decoded = decoded;
            req.authenticated = true;
            next();
        }
    });
});
const verifyRole = express.Router();
verifyRole.use((req, res, next) => {
    const id = req.headers['Identifier'];
    try {
        const connection = importConnection();
        connection.query("SELECT * FROM usuario WHERE id = ?", [id], function (error, results, fields) {
            res.send(JSON.stringify(results));
            if (results.length != 0) {
                if (results[0].role !== 'admin') {
                    return res.sendStatus(403); // Forbidden
                }
                else {
                    next();
                }
            }
            else {
                return res.status(400).json({ message: 'El usuario con ese id no existe.' });
            }
        });
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
module.exports = {
    generateToken,
    verifyToken,
    verifyRole
};
