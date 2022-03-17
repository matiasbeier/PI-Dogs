export default function validate({
    name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, origin, temperament}, 
    temperaments){
        
    let error = {}
    if(!name) {
        error.name = "name is required"
    } else if(!/^[aA-zZ\s]*$/.test(name)){
        error.name = "name is invalid"
    }

    if(!height_min || !height_max) {
        error.height = "height is required"
    } else if(!/^[0-9]*$/.test(height_min) || !/^[0-9]*$/.test(height_max)){
        error.height = "height should be a number"
    } else if(parseInt(height_min) > parseInt(height_max)){
        error.height = "the parameter left should be smaller than rigth"
    }

    if(!weight_min || !weight_max) {
        error.weight = "weight is required"
    } else if(!/^[0-9]*$/.test(weight_min) || !/^[0-9]*$/.test(weight_max)){
        error.weight = "weight should be a number"
    } else if(parseInt(weight_min) > parseInt(weight_max)){
        error.weight = "the parameter left should be smaller than rigth"
    }

    if(life_span_min !== "" && life_span_max !== "" && parseInt(life_span_min) > parseInt(life_span_max)){
        error.life_span = "the parameter left should be smaller than rigth"
    } else if(life_span_min !== "" || life_span_max !== "") {
        if(life_span_min !== "" && life_span_max !== ""){
            if(!/^[0-9]*$/.test(life_span_min) || !/^[0-9]*$/.test(life_span_max)){
                error.life_span = "life-span should be a number"
            }  
        } else if((life_span_min !== "") && (!/^[0-9]*$/.test(life_span_min))) {
            error.life_span = "life-span should be a number"
        } else if ((life_span_max !== "") && !/^[0-9]*$/.test(life_span_max)) {
            error.life_span = "life-span should be a number"
        }
    }
    

    if(!/^[aA-zZ\s]*$/.test(origin) && origin !== "") {
        error.origin = "origin is invalid"
    }

    if(!/^[aA-zZ\s+,-]*$/.test(temperament)){
        error.temperament = "temperament is invalid"
    } else if(typeof(temperament) === "string" && temperament !== ""){
        const tempToArray = temperament.split(',')
        for (let i = 0; i < tempToArray.length; i++) {
            if(!temperaments.find(el => el.name.toLowerCase() === tempToArray[i].toLowerCase())){
                error.temperament = "only temperaments from list"
            } else{
                error.temperament = null
            }
        }
    } else if(Array.isArray(temperament)){
        
        for (let i = 0; i <temperament.length; i++) {
            if(temperament[i] === "") continue;
            if(!temperaments.find(el => el === temperament[i])){
                error.temperament = "only temperaments from list"
            }
        }      
    }
    
    return error;
}