"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosController = require("../controllers/usuariosController");
const usuarios = (express) => {
    const router = express.Router();
    router.get('/', usuariosController.getUsuarios);
    return router;
};
module.exports = usuarios;
