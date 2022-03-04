const initialState = {
    dogs: [],
    dog: {},
    temperaments: []
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

        default:
            return state;
    }
}

export default reducer;