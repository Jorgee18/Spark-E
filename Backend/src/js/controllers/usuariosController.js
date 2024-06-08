"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const bcrypt = require('bcrypt');
const saltRounds = 10;
//MODO DE USO 
/*
const plaintextPassword = 'password123'; // La contraseña proporcionada por el usuario

// Genera un salt (una cadena aleatoria) para hashear la contraseña
bcrypt.genSalt(10, (err, salt) => {
    if (err) {
        // Manejar el error
    } else {
        // Hashea la contraseña con el salt
        bcrypt.hash(plaintextPassword, salt, (err, hash) => {
            if (err) {
                // Manejar el error
            } else {
                // Almacena el hash en la base de datos en lugar de la contraseña en texto plano
                // hash contiene la contraseña hasheada que puedes almacenar en tu base de datos
                console.log('Contraseña hasheada:', hash);
            }
        });
    }
});
// Compara la contraseña proporcionada con la versión hasheada almacenada en la base de datos
bcrypt.compare(plainPasswordFromUser, hashedPasswordFromDatabase, (err, result) => {
    if (err) {
        // Manejar el error
    } else if (result) {
        // Las contraseñas coinciden, el usuario puede iniciar sesión
        console.log('Contraseñas coinciden');
    } else {
        // Las contraseñas no coinciden, el usuario no puede iniciar sesión
        console.log('Contraseñas no coinciden');
    }
});
*/
const getUsuarios = (req, res) => {
    try {
        const connection = importConnection();
        res.send("getUsuarios");
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const getUsuariosByNombre = (req, res) => {
    try {
        const connection = importConnection();
        res.send("getUsuariosByNombre");
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
module.exports = {
    getUsuarios,
    getUsuariosByNombre
};
