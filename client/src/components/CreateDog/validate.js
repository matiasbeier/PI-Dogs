export default function validate(input){
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

/*     if(input.temperament && !temperaments?.includes(input.temperament)){
        error.temperament = "temperament is invalid"
    } */
    return error;
}