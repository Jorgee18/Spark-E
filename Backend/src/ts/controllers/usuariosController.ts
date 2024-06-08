const importConnection = () => require("../app").connection;
const importBodyParser = () => require("../app").bodyParser;

const getUsuarios = (req:any, res:any) => {
    try {
        const connection = importConnection();
        res.send("getUsuarios");
    } catch (error: any) {
        res.status(500);
        res.send(error.message);
    }
};

const getUsuariosByNombre = (req:any, res:any) => {
    try {
        const connection = importConnection();
        res.send("getUsuariosByNombre");
    } catch (error: any) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = {
    getUsuarios,
    getUsuariosByNombre
};