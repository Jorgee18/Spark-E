const usuarios = (express:any) => {
    const router = express.Router();

    router.get('/', (req:any, res:any)=>{
        res.json("Hola Mundo");
    });

    return router;
};

module.exports = usuarios;