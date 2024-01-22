//
const {Router}= requiere ('express');
const router = Router();
const _= require('underscore');

const movies= require('../ejemplo.json');

router.get('/',(req, res)=>{
    res.json(movies);

});
router.port('/',(req,res) =>{
   const {title, director, year, rating}= req.bod;
   if(title && director && year && rating){
    const id = movies.length +1;
   const newmovie= {...req.bady,id};
    movies.push(newmovie);
    res.json(movies);
   } else {
    res.status(500).json({error:'wrong request'});
   }
    
});
router.put('/:id',(req, res) =>{
    const{id}= req.params;
    const {titulo, director,year,rating}= req.body;
    if(titulo && director && year && rating){
    _.each(movies, (movie, i)=>{
        if(movie.id==id){
            movie.titulo=titulo;
            movie.director=director;
            movie.year=year;
            movie.rating=rating;
        }
    });
    res.json(movies);

    }else{
        res.status(500).json({error:'there was an error'});
    }
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
   _.each(movies,(movie, i)=> {
if(movie.id == id){
    movies.splice(i, 1);
}
   });
    res.send(movies);
});
module.exports = router;