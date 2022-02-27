const {Dog, Temperament} = require('../db.js');
const {API_KEY} = process.env;

async function getApiTemperaments () {
    const temperaments = [];
    const dogs = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    dogs.json().forEach(dog =>{
        const arr = dog.temperament.split(', ');
        for(let i = 0; i < arr.length; i++){
            if(!temperaments.includes(arr[i])) temperaments.push(arr[i]);
        }
        
    })
    return temperaments; // array con todos los temperamentos posibles
}

function fromStringToArray(string){
        const arr = string.split(', ');
}

async function getDogsAPI(name){
    if(name) {
        const races = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}&&api_key=${API_KEY}`)
        const breeds = races.json();
        if(breeds) {
           return breeds; 
        } else {
            return null
        }
    } else {
        const races = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const breeds = races.json();
        return breeds;
    }
}

async function getDogsDB(name){
    if(name) {
        const races = await Dog.findAll({
            where: {
                name: {
                    includes: name
                }
            }
        })
        if(races){
            return races;
        } else {
            return null;
        }

    } else {
        const races = await Dog.findAll()
        return races;
    }
}

//crear un arreglo de promesas y hacerlo con promiseAll
function addTemperament(temperament, dog){
    const temp = temperament.split(", ");
    const allTempPromises = temp.map(element => {
        const dogTemperaments = Temperament.findOrCreate({
            where: {
                name: element
            }
        })
        return dogTemperaments;
    });
    Promise.all(allTempPromises)
        .then(allTemp =>{
            allTemp.forEach(temp => dog.addTemperament(temp)) 
        }) 
    
}


module.exports = {
    getApiTemperaments,
    getDogsAPI,
    getDogsDB,
    addTemperament
}