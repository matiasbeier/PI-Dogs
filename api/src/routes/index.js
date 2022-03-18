const { Router } = require('express');
const {Dog, Temperament} = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getApiTemperaments, getDogsAPI, getDogsDB, addTemperament, getDogByID, fixWeight, setTemperament} = require('./utils.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/dogs', async (req,res) =>{
    try{
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
            let life_span = ""
            if(life_span_min && life_span_max){
                life_span = life_span_min + " - " + life_span_max + " years";
            } else if(life_span_min || life_span_max) {
                life_span = (life_span_min ? life_span_min : life_span_max) + " years";
            }
            let dog = await Dog.create({
                name: name[0].toUpperCase().concat(name.slice(1)),
                height,
                weight,
                life_span: life_span ? life_span : null,
                origin: origin ? origin[0].toUpperCase().concat(origin.slice(1)) : null,
                image: {url: image},
            })
            console.log(dog)
            const newDog = await addTemperament(temperament, dog);
            return res.send(newDog);
        } else{
            res.status(404).send('Fields name, height and weight are require');
        }
    } catch(e){
        res.send(e);
    } 
})


router.get('/dogs', async (req,res) =>{
    try {
        let {name} = req.query;
        const [dogsAPI, dogsDB ] = await Promise.all([getDogsAPI(name), getDogsDB(name)])
        if(dogsAPI || dogsDB){
            let total = dogsAPI.concat(dogsDB);
            total = total.map(dog => {
                return ({
                    id: dog.id,
                    weight: fixWeight(dog.weight.metric),
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
    } catch (e) {
        res.send(e)
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


router.put('/dogs/:id', async (req,res) =>{
    try{
        const {id} = req.params
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
        } = req.body;
        if(name && height_min && height_max && weight_min && weight_max) {
            const height = {metric: height_min + " - " + height_max};
            const weight = {metric: weight_min + " - " + weight_max};
            let life_span = ""
            if(life_span_min && life_span_max){
                life_span = life_span_min + " - " + life_span_max + " years";
            } else if(life_span_min || life_span_max) {
                life_span = (life_span_min ? life_span_min : life_span_max) + " years";
            }
                let number = await Dog.update({
                    name: name[0].toUpperCase().concat(name.slice(1)),
                    height: height,
                    weight: weight,
                    life_span: life_span ? life_span : null,
                    origin: origin ? origin[0].toUpperCase().concat(origin.slice(1)) : null,
                    image: {url: image},
                },
                {
                    where: {
                        id: id
                    }
                })
                console.log(number)
                const dog = await Dog.findByPk(id)
                const newDog = await setTemperament(temperament, dog)
                return res.send(newDog);
        } 
        res.status(404).send('Fields name, height and weight are require');
    } catch(e){
        res.send(e);
    }
})


router.delete('/dogs/:id', async (req,res) =>{
    const {id} = req.params;
    try{
        const dog = await Dog.destroy({
            where: {
                id: id
            }
        })
        console.log(dog)
        if(dog) {
            res.send(id)
        } else {
            res.status(400).send('dont exist a dog with that id')
        }
    }catch(e){
        res.send(e)
    }
})


module.exports = router;
