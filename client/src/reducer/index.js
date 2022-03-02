const initialState = {
    dogs: [],
    dog: {}
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

        default:
            return state;
    }
}

export default reducer;