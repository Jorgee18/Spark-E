
const getUsuarios = (req:any, res:any) => {
    res.send("getUsuarios");
};

const getUsuariosByNombre = (req:any, res:any) => {
    res.send("getUsuariosByNombre");
};

module.exports = {
    getUsuarios,
    getUsuariosByNombre
};