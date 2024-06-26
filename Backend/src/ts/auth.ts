const jwt = require('jsonwebtoken');
const config = require('./config');
const express = require("express");
const importConnection = () => require("./app").connection;

function generateToken(user: any) {
    const token = jwt.sign(user, config.jwtSecret, { expiresIn: '3h' });
    return token;
}

const verifyToken=express.Router();
verifyToken.use((req:any,res:any,next:any)=>{
    const token=req.headers["authorization"];
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

const verifyRole=express.Router();
verifyRole.use((req:any,res:any,next:any)=>{
    const id = req.headers["identifier"];
    const connection = importConnection();
    try {
        connection.query("SELECT * FROM usuarios WHERE id = ?", [id], function(error:any,results:any,fields:any){
            
            if(!results || results.length == 0){
                return res.status(400).json({ message: 'El usuario con ese id no existe.' });
            }
            
            if (results[0].role !== 'admin') {
                return res.sendStatus(403); // Forbidden
            }
            else{
                next();
            }
    
        });
    } catch(err){
        res.status(500).send({ message: 'Error al verificar el rol del usuario' });
    }
});

module.exports = {
    generateToken,
    verifyToken,
    verifyRole
};