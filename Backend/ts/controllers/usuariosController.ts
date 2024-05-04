const importConnection = () => require("../app").connection;
const importBodyParser = () => require("../app").bodyParser;

const getUsuarios = (req:any, res:any) => {
    const connection = importConnection();
    res.send("getUsuarios");
};

const getUsuariosByNombre = (req:any, res:any) => {
    const connection = importConnection();
    res.send("getUsuariosByNombre");
};

module.exports = {
    getUsuarios,
    getUsuariosByNombre
};