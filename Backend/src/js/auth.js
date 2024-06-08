"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const config = require('./config');
const express = require("express");
function generateToken() {
    const token = jwt.sign({ foo: 'bar' }, config.jwtSecret, { expiresIn: '3h' });
    return token;
}
const verifyToken = express.Router();
verifyToken.use((req, res, next) => {
    const token = req.headers["access-token"];
    if (!token) {
        return res.status(403).send('Token no proporcionado');
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
module.exports = {
    generateToken,
    verifyToken
};
