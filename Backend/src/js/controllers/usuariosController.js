"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importConnection = () => require("../app").connection;
const generateToken = require("../auth").generateToken;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const validator = require('validator');
const expRegxStrUserName = /^[a-zA-Z][a-zA-Z0-9-_\. ]{3,15}$/;
const expRegxStrPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const expRegxStrRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
//MODO DE USO 
const plaintextPassword = 'password123'; // La contraseña proporcionada por el usuario
// Genera un salt (una cadena aleatoria) para hashear la contraseña
bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
        // Manejar el error
    }
    else {
        // Hashea la contraseña con el salt
        bcrypt.hash(plaintextPassword, salt, (err, hash) => {
            if (err) {
                // Manejar el error
            }
            else {
                // Almacena el hash en la base de datos en lugar de la contraseña en texto plano
                // hash contiene la contraseña hasheada que puedes almacenar en tu base de datos
                console.log('Contraseña hasheada:', hash);
            }
        });
    }
});
/*
// Compara la contraseña proporcionada con la versión hasheada almacenada en la base de datos
bcrypt.compare(plainPasswordFromUser, hashedPasswordFromDatabase, (err:any, result:any) => {
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
const registrar = (req, res) => {
    const connection = importConnection();
    // Obtén los datos del cuerpo de la solicitud
    const { username, rut, email, password, confirmPassword, cod_region, cod_comuna } = req.body;
    console.log('Datos recibidos:', { username, rut, email, password, cod_region, cod_comuna });
    let usuarioValido = true;
    const sql_validUser = 'SELECT * FROM usuarios WHERE nombre = ? OR rut = ? OR correo = ?';
    const values_validUser = [username, rut, email];
    connection.query(sql_validUser, values_validUser, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        if (results.length > 0) {
            // Si el NOMBRE, RUT o el CORREO ya existe, enviar un mensaje de error
            usuarioValido = false;
            return res.status(400).json({ message: 'El usuario no se agregó porque ya existe un usuario con ese NOMBRE, RUT o CORREO.' });
        }
    });
    const sql_validRegionComuna = 'SELECT * FROM comunas WHERE cod_comuna = ? AND cod_region = ?';
    const values_validRegionComuna = [cod_comuna, cod_region];
    connection.query(sql_validRegionComuna, values_validRegionComuna, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        if (results.length == 0) {
            // Si la COMUNA no coincide con la REGION, enviar un mensaje de error
            usuarioValido = false;
            return res.status(400).json({ message: 'El usuario no se agregó porque la REGION o COMUNA no coinciden' });
        }
    });
    if (typeof username !== 'string' || !expRegxStrUserName.test(username) || username.length < 3 || username.length > 15) {
        usuarioValido = false;
        return res.status(400).json({ message: 'El nombre de usuario no es válido' });
    }
    if (!validator.isEmail(email)) {
        usuarioValido = false;
        return res.status(400).json({ message: 'El email no es válido' });
    }
    if (typeof rut !== 'string' || !expRegxStrRut.test(rut)) {
        usuarioValido = false;
        return res.status(400).json({ message: 'El rut no es válido' });
    }
    if (typeof password !== 'string' || !expRegxStrPassword.test(password) || password.length < 8 || password.length > 20) {
        usuarioValido = false;
        return res.status(400).json({ message: 'La contraseña no es válida' });
    }
    if (password !== confirmPassword) {
        usuarioValido = false;
        return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }
    if (usuarioValido) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                return res.status(500).json({ message: 'Error al generar rounds para hashear' });
            }
            else {
                // Hashea la contraseña con el salt
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        return res.status(500).json({ message: 'Error para hashear la contraseña' });
                    }
                    else {
                        // Consulta SQL para insertar los datos en la base de datos
                        const sql = 'INSERT INTO usuarios (nombre, rut, correo, clave, cod_comuna) VALUES (?, ?, ?, ?, ?)';
                        const values = [username, rut, email, hash, cod_comuna];
                        // Ejecuta la consulta
                        connection.query(sql, values, (err, results) => {
                            if (err) {
                                console.error('Error al insertar los datos en la base de datos:', err.stack);
                                return res.status(400).json({ message: 'Error al registrar el usuario' });
                            }
                            console.log('Datos insertados en la base de datos:', { username, rut, email, password });
                            res.status(201).json({ message: 'Usuario registrado con éxito' });
                        });
                    }
                });
            }
        });
    }
};
const changePassword = (req, res) => {
    const connection = importConnection();
    const { email, newPassword, confirmPassword, confirmationCode } = req.body;
    console.log('Datos recibidos:', { email, newPassword, confirmPassword, confirmationCode });
    let cambioValido = true;
    const sql_valid_email = 'SELECT * FROM usuarios WHERE correo = ?';
    const value_valid_email = [email];
    connection.query(sql_valid_email, value_valid_email, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        if (results.length == 0) {
            cambioValido = false;
            // Si el email no existe, enviar un mensaje de confirmación
            return res.status(400).json({ message: 'El usuario con ese correo no existe.' });
        }
    });
    // Validar    
    if (typeof newPassword !== 'string' || !expRegxStrPassword.test(newPassword) || newPassword.length < 8 || newPassword.length > 20) {
        cambioValido = false;
        return res.status(400).json({ message: 'La contraseña no es válida' });
    }
    if (newPassword !== confirmPassword) {
        cambioValido = false;
        return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }
    // Update donde el correo sea igual
    if (cambioValido) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                return res.status(500).json({ message: 'Error al generar rounds para hashear' });
            }
            else {
                bcrypt.hash(newPassword, salt, (err, hash) => {
                    if (err) {
                        return res.status(500).json({ message: 'Error para hashear la contraseña' });
                    }
                    else {
                        const sqlUpdate = 'UPDATE usuarios SET clave = ? WHERE correo = ?';
                        const value_update_password = [hash, email];
                        connection.query(sqlUpdate, value_update_password, (err, results) => {
                            if (err) {
                                console.error('Error al actualizar la contraseña en la base de datos:', err);
                                return res.status(500).json({ message: 'Error al actualizar la contraseña' });
                            }
                            console.log('Contraseña actualizada para el usuario');
                            return res.status(200).json({ message: 'Contraseña actualizada con éxito' });
                        });
                    }
                });
            }
        });
    }
};
const login = (req, res) => {
    const connection = importConnection();
    const { username, password } = req.body;
    console.log('Datos recibidos:', { username, password });
    let usuarioValido = true;
    const sql_validUser = 'SELECT * FROM usuarios WHERE nombre = ?';
    const values_validUser = [username];
    connection.query(sql_validUser, values_validUser, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).send('Error en el servidor');
        }
        if (results.length == 0) {
            // Si el NOMBRE no existe, enviar un mensaje de error
            usuarioValido = false;
            return res.status(400).json({ message: 'El usuario no se ha encontrado en la BD' });
        }
        else {
            bcrypt.compare(password, results[0].clave, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Error para comparar las contraseñas' });
                }
                else if (result) {
                    const token = generateToken({
                        'username': results[0].nombre,
                        'rut': results[0].rut,
                        'correo': results[0].correo
                    });
                    return res.status(200).json({ message: 'Ingresó correctamente', token: token });
                }
                else {
                    return res.status(400).json({ message: 'Las contraseñas no coinciden' });
                }
            });
        }
    });
};
module.exports = {
    getUsuarios,
    getUsuariosByNombre,
    registrar,
    changePassword,
    login
};
