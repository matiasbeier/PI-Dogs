export default function validate(input, temperaments){
    let error = {}
    if(!input.name) {
        error.name = "name is required"
    } else if(!/[aA-zZ\s]{1}$/.test(input.name)){
        error.name = "name is invalid"
    }

    if(!input.height_min || !input.height_max) {
        error.height = "height is required"
    } else if(!/[0-9]{1}/.test(input.height_min || input.height_max)){
        error.height = "height should be a number"
    } else if(input.height_min > input.height_max){
        error.height = "the parameter left should be smaller than rigth"
    }

    if(!input.weight_min || !input.weight_max) {
        error.weight = "weight is required"
    } else if(!/[0-9]{1}/.test(input.weight_min || input.weight_max)){
        error.weight = "weight should be a number"
    } else if(input.weight_min > input.weight_max){
        error.weight = "the parameter left should be smaller than rigth"
    }

    if(!/[0-9]{1}/.test(input.life_span_min || input.life_span_max)) {
        error.life_span = "life-span should be a number"
    } else if(input.life_span_min > input.life_span_max){
        error.life_span = "the parameter left should be smaller than rigth"
    }

    if(!/[aA-zZ\s]{1}$/.test(input.origin)) {
        error.origin = "origin is invalid"
    }

    if(/[0-9]{1}/.test(input.temperament)){
        error.temperament = "shouldn't have numbers"
    } else if(typeof(input.temperament) === "string" && input.temperament !== ""){
        const tempToArray = input.temperament.split(',')
        for (let i = 0; i < tempToArray.length; i++) {
            if(!temperaments.find(el => el.name.toLowerCase() === tempToArray[i].toLowerCase())){
                error.temperament = "only temperaments from list"
            } else{
                error.temperament = null
            }
        }
    } else if(Array.isArray(input.temperament)){
        
        for (let i = 0; i <input.temperament.length; i++) {
            if(input.temperament[i] === "") continue;
            if(!temperaments.find(el => el === input.temperament[i])){
                error.temperament = "only temperaments from list"
            }
        }      
    }
    
    return error;
}