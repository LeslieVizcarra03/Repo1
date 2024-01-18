const { Router } = require("express");
const router= Router();
//definir nuevas rutas para el servidor


Router.get('/test',(req, res) =>{
    const data ={
        "name": "Fazt",
        "website": "fastweb.com"
    };
    res.json(data);
});

//exporta
module.exports =router;