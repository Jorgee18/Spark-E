const usuariosController = require("../controllers/usuariosController")

const usuarios = (express:any) => {
    const router = express.Router();

    router.get('/', usuariosController.getUsuarios);

    return router;
};

module.exports = usuarios;