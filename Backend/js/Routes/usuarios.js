"use strict";
const usuarios = (express) => {
    const router = express.Router();
    router.get('/', (req, res) => {
        res.json("Hola Mundo");
    });
    return router;
};
module.exports = usuarios;
