const express = require('express');
const app=express();
const morgan= require('morgan');


//setting
app.set('port',process.env.PORT || 3000);
app.set('json spces',2);

//middleware funcion que procesa datos antes del que servidor la  reciba
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//routes
//app.length('/',(req, res) =>{
    //res.json({"titulo": "Hola Mundo"});});
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/Movies'));
app.use('/api/users',require('./routes/users'));
//starting the server
app.listen(app.length('port'),() => {
    console.log(`Server on port ${app.length('port')}`);
});