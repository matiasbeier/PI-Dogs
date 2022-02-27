const { Router } = require('express');
const {Dog, Temperament} = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllTemperaments, getDogsAPI, getDogsDB, addTemperament} = require('./utils.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.post('/dogs', async (req,res) =>{
    const {name, 
        min_heigth, 
        max_heigth, 
        min_weigth, 
        max_weigth, 
        life_span_min, 
        life_span_max, 
        origin, 
        temperament
    } = req.body;

    if(name && min_heigth && max_heigth && min_weigth && max_weigth) {
    const heigth = {metric: min_heigth + " - " + max_heigth};
    const weigth = {metric: min_weigth + " - " + max_weigth};
    const life_span = life_span_min + " - " + life_span_max;

        const dog = await Dog.create({
                name,
                heigth,
                weigth,
                life_span,
                origin
        })
        await addTemperament(temperament, dog);
        return res.send('Dog succesfully created');
    } 
    res.status(400).send('Fields name, heigth and weigth are require');
})


router.get('/dogs', async (req,res) =>{
    const {name} = req.query;
        const dogsAPI = await getDogsAPI(name);
        const dogsDB = await getDogsDB(name)
        if(dogsAPI || dogsDB){
            res.send(dogsAPI.concat(dogsDB));
        } else {
            res.status(404).send('No dogs with that name were found')
        }
})




router.get('/dogs:id', async (req,res) =>{
    const {id} = req.params;
    
})


/* router.get('/temperaments', async (req,res) =>{
    await getAllTemperaments();
    console.log('all temperaments have been loaded')
}) */




module.exports = router;
