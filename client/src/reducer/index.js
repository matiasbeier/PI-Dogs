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
        case 'ORDER_ASC':
            return {
                ...state,
                dogs: state.dogs.sort()
            }
        case 'ORDER_DES':
            return {
                ...state,
                dogs: state.dogs.reverse()
            }
        case 'FILTER_BY_TEMPERAMENT':
            state.dogsFiltered = state.dogs
            let dogsFilter = action.payload === "all"
                ? state.dogsFiltered
                : state.dogsFiltered.filter(dog =>{
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
/*         case 'FILTER_BY_API_OR_DB':
            console.log(state.dogs)
            dogsFilter = action.payload === "all"
                ? dogsFilter
                : state.dogs.filter(dog => {
                })
            return {
                ...state,
                dogs: dogsFilter
            } */

        default:
            return state;
    }
}

export default reducer;