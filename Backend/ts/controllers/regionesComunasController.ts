const importConnection = () => require("../app").connection;

const getRegiones = (req:any, res:any) => {
    const connection = importConnection();
    connection.query("SELECT * FROM regiones",function(error:any,results:any,fields:any){
        res.send(JSON.stringify(results));
    });
};

const getComunasByCod = (req:any, res:any) => {
    const connection = importConnection();
    let cod_region = req.params.cod_region;
    connection.query("SELECT * FROM comunas WHERE cod_region = ?", [cod_region], function(error:any,results:any,fields:any){
        res.send(JSON.stringify(results));
    });
};

module.exports = {
    getRegiones,
    getComunasByCod
};