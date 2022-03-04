const { Router } = require('express');
const {Dog, Temperament} = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getApiTemperaments, getDogsAPI, getDogsDB, addTemperament, getDogByID} = require('./utils.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.post('/dogs', async (req,res) =>{
    const {name, 
        height_min, 
        height_max, 
        weight_min, 
        weight_max, 
        life_span_min, 
        life_span_max, 
        origin, 
        temperament, 
        image
    } = req.body.newDog;

    if(name && height_min && height_max && weight_min && weight_max) {
        const height = {metric: height_min + " - " + height_max};
        const weight = {metric: weight_min + " - " + weight_max};
        const life_span = life_span_min + " - " + life_span_max;
        try{
            let dog = await Dog.create({
                    name,
                    height,
                    weight,
                    life_span,
                    origin,
                    image: {url: image},
            })
            const newDog = await addTemperament(temperament, dog);
            console.log(newDog)
            return res.send(newDog);
        } catch(e){
            return res.send(e);
        }
    } 
    res.status(404).send('Fields name, height and weight are require');
})


router.get('/dogs', async (req,res) =>{
    let {name} = req.query;
        name = name?.toLowerCase();
        const [dogsAPI, dogsDB ] = await Promise.all([getDogsAPI(name), getDogsDB(name)])
        if(dogsAPI || dogsDB){
            console.log(dogsDB)
            let total = dogsAPI.concat(dogsDB);
            total = total.map(dog => {
                console.log(dog)
                return ({
                    id: dog.id,
                    name: dog.name,
                    image: dog.image.url,
                    temperament: Array.isArray(dog.temperament) ? dog.temperament.join(', ') : dog.temperament, 
                    created_by_me: dog.created_by_me? dog.created_by_me : false
                })
            })
            res.send(total)
        } else {
            res.status(404).send('No dogs with that name were found')
        }
})


router.get('/dogs/:id', async (req,res) =>{
    const {id} = req.params;
    try{
        const dog = await getDogByID(id);
        if(dog.name){
            return res.send(dog);
        }
        return res.status(404).send(dog)
        
    }catch(e){
        res.send(e)
    }
})


router.get('/temperaments', async (req,res) =>{
    try{
        const temperaments = await getApiTemperaments();
        //tendria que hacerlo con un findOrCreate, aca funciona porque se rompe la base de datos cada vez que
        //sacamos el npm start.
        await temperaments.forEach( temp => Temperament.findOrCreate({
            where:{
                name: temp
            }
        }))
        const temperamens_from_db = await Temperament.findAll()
        res.send(temperamens_from_db);
    }catch(e){
        res.send(e);
    }
})




module.exports = router;
