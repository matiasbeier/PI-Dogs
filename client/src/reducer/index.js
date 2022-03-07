const initialState = {
    dogs: [],
    dog: {},
    temperaments: [],
    dogsFiltered: []
}


function reducer(state = initialState, action){
    switch (action.type) {
        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogs: action.payload,
                dogsFiltered: action.payload
            }
        case 'GET_DOGS_BY_NAME':
            return {
                state,
                dogs: action.payload
            }

        case 'CREATE_DOG':
            return {
                ...state,
                dogs: [...state.dogs, action.payload]
            }

        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }

        case 'GET_DOG_DETAIL':
            return {
                ...state,
                dog: action.payload
            }
        case 'RESET_DOG_DETAIL':
            return {
                ...state,
                dog: {}
            }
        case 'ORDER_BY_NAME':
            const dogsOrdered = action.payload === "asc" 
                    ? state.dogs.sort(function(a, b){
                        if(a.name > b.name) return 1;
                        if(a.name < b.name) return -1;
                        return 0;
                    })
                    : state.dogs.sort(function(a, b) {
                        if(a.name < b.name) return 1; 
                        if(a.name > b.name) return -1;
                        return 0;
                    })  
            return {
                ...state,
                dogsFiltered: dogsOrdered
            }
        case 'ORDER_BY_WEIGHT':

            return {
                ...state,
                dogsFiltered: action.payload === "ligth" ? state.dogs : state.dogs.reverse() 
            }
        case 'FILTER_BY_TEMPERAMENT':
            let dogsFilter = action.payload === "all"
                ? state.dogs
                : state.dogs?.filter(dog =>{
                    const ArrayOfTemperaments = dog.temperament?.split(', ')
                    if(ArrayOfTemperaments?.includes(action.payload)){
                       return true
                    }
                    return false
                } )
            return {
                ...state,
                dogsFiltered: dogsFilter
            }
        case 'FILTER_BY_API_OR_DB':
            let dogsCreated = action.payload === "all"
                ? state.dogs
                : state.dogs.filter(dog =>dog.created_by_me.toString() === action.payload)
            return {
                ...state,
                dogsFiltered: dogsCreated
            }
        case 'RESET_ALL_DOGS':
            return {
                ...state,
                dogs: [],
                dogsFiltered: []
            }

        default:
            return state;
    }
}

export default reducer;