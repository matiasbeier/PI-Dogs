const initialState = {
    dogs: [],
    dog: {},
    temperaments: [],
    dogsFiltered: [],
    dogsFilteredAux: [],
    loading: false
}


function reducer(state = initialState, action){
    switch (action.type) {
        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogs: action.payload,
                dogsFiltered: action.payload,
                dogsFilteredAux: action.payload
            }
        case 'GET_DOGS_BY_NAME':
            return {
                state,
                dogs: action.payload
            }

        case 'CREATE_DOG':
            return {
                ...state,
                dogs: [...state.dogs, action.payload],
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
            const dogsOrderedByName = action.payload === "asc" 
                    ? state.dogsFiltered.sort(function(a, b){
                        if(a.name > b.name) return 1;
                        if(a.name < b.name) return -1;
                        return 0;
                    })
                    : state.dogsFiltered.sort(function(a, b) {
                        if(a.name < b.name) return 1; 
                        if(a.name > b.name) return -1;
                        return 0;
                    })  
            return {
                ...state,
                dogsFiltered: dogsOrderedByName
            }
        case 'ORDER_BY_WEIGHT':
            let dogsOrderByWeight = action.payload === "ligth" 
            ? state.dogsFiltered.sort(function(a, b){
                let [aMinWeight, aMaxWeight] = a.weight.split(' - ');
                let [bMinWeight, bMaxWeight] = b.weight.split(' - ');
                if(parseInt(aMinWeight) > parseInt(bMinWeight)) return 1;
                else if(parseInt(aMinWeight) < parseInt(bMinWeight)) return -1;
                else {
                    if(parseInt(aMaxWeight) > parseInt(bMaxWeight))return 1;
                    else if(parseInt(aMaxWeight) < parseInt(bMaxWeight)) return -1;
                    else return 0
                }
            })
            : state.dogsFiltered.sort(function(a, b){
                let [aMinWeight, aMaxWeight] = a.weight.split(' - ');
                let [bMinWeight, bMaxWeight] = b.weight.split(' - ');

                if(parseInt(aMaxWeight) < parseInt(bMaxWeight)) return 1;
                else if(parseInt(aMaxWeight) > parseInt(bMaxWeight)) return -1;
                else {
                    if(parseInt(aMinWeight) < parseInt(bMinWeight)) return 1;
                    else if(parseInt(aMinWeight) > parseInt(bMinWeight)) return -1;
                    else return 0;
                }
            })
            return {
                ...state,
                dogsFiltered: dogsOrderByWeight 
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
                dogsFiltered: dogsFilter,
                dogsFilteredAux: dogsFilter,
            }
        case 'FILTER_BY_API_OR_DB':
            let dogsCreated = action.payload === "all"
                ? state.dogsFilteredAux
                : state.dogsFilteredAux.filter(dog =>dog.created_by_me.toString() === action.payload)
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
        case 'SEARCH_BY_NAME_LOADING':
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }
}

export default reducer;