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
            state.dogs.push(action.payload)
            return {
                ...state
            }

        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }

        default:
            return state;
    }
}

export default reducer;