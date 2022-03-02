const {Dog, Temperament} = require('../db.js');
const {API_KEY} = process.env;
const axios = require('axios');
const {Op} = require('sequelize');

async function getApiTemperaments () {
    const temperaments = [];
    const data = await getDogsAPI();
    data.forEach(dog =>{
        if(dog.temperament){
            const arr = dog.temperament.split(', ');
            for(let i = 0; i < arr.length; i++){
                if(!temperaments.includes(arr[i])) temperaments.push(arr[i]);
            }
        }
    })
         // array con todos los temperamentos posibles
    return temperaments
}


//podria retornar solo los datos que voy a utilizar para optimizar
async function getDogsAPI(name){
    let {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    if(name) {
        let dogs = [];
        dogs = data.filter( race => {
            if(race.name.toLowerCase().includes(name)){
                return {
                    name: race.name,
                    image: race.image,
                    temperament: race.temperament,
                    created_by_me: false
                }
            }
            });
        return dogs
    }
    return data;
}

async function getDogsDB(name){
    if(name) {
        const races = await Dog.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                } 
            },
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [] //  traelo sobre la tabla atributos
                }
            }
        })
        if(races){
            return races.map( race => {
                return {
                name: race.name,
                image: race.image,
                temperament: race.temperaments.map(t => t.name),
                created_by_me: race.created_by_me
                }
            });
        } else {
            return null;
        }
    } else {
        const races = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return races.map( race => {
            return {
            id: race.id,
            name: race.name,
            image: race.image,
            temperament: race.temperaments.map(t => t.name),
            created_by_me: race.created_by_me,
            heigth: race.heigth,
            weigth: race.weigth,
            life_span: race.life_span,
            origin: race.origin
        }});
    }
}



async function addTemperament(temperament, dog){
    if(temperament){
        const temp = temperament.split(", ");
        await temp.forEach(async element => {
            const [t, v] = await Temperament.findOrCreate({
                where: {
                    name: element
                }
            })
//si me dicen que no puedo crear nuevos temperamentos cambio el finOrCreate por un findAll y en el name: pongo
// name: temperament.map(el => el)
            dog.addTemperament(t)
        });
    };
    return {
        name: dog.name,
        image: dog.image,
        temperament: temperament,
        created_by_me: true
    } 
}

async function getDogByID(id){
    const dogsDB = await getDogsDB();
    const dog = dogsDB.find(d => d.id === id);
    if(dog) return dog;

    const dogAPI = await getDogsAPI();
    console.log(dogAPI)
    const doggy = dogAPI.find(d => Number(d.id) === Number(id));
    if(doggy) {
        return doggy;
    } else {
        return ('No dog was found with that id');
    }
    
}

/* const [allTempPromises, veracidad] = temp.map(async element => {
    return await Temperament.findOrCreate({
        where: {
            name: element
        }
    })
});
console.log(allTempPromises)
if(allTempPromises.length) allTempPromises.forEach((temp) => dog.addTemperament(temp.id))  */

module.exports = {
    getApiTemperaments,
    getDogsAPI,
    getDogsDB,
    addTemperament,
    getDogByID
}