const jwt = require('jsonwebtoken');
const config = require('./config');
const express = require("express");

function generateToken(user: any) {
    const token = jwt.sign(user, config.jwtSecret, { expiresIn: '3h' });
    return token;
}

const verifyToken=express.Router();
verifyToken.use((req:any,res:any,next:any)=>{
    const token=req.headers["access-token"];
    if (!token) {
        return res.status(403).send('El Token no ha sido proporcionado');
    }

    jwt.verify(token, config.jwtSecret, (err:any, decoded:any)=> {
        if(err){
            return res.status(500).send('Fallo en la autenticación del token');
        }else{
            req.decoded=decoded;
            req.authenticated=true;
            next();
        }
    });
});

module.exports = {
    generateToken,
    verifyToken
};