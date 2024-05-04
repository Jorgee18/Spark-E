
const getRegiones = (req:any, res:any) => {
    res.send("getRegiones");
};

const getComunasByCod = (req:any, res:any) => {
    res.send("getComunasByCod");
};

module.exports = {
    getRegiones,
    getComunasByCod
};