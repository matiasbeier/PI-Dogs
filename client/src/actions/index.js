import axios from "axios"

export const getAllDogs = () =>{
    return function(dispatch) {
        return axios.get('http://localhost:3001/dogs')
        .then(({data}) => {
            dispatch({type: 'GET_ALL_DOGS', payload: data})
        })
    }
}
export const getDogsByName = (name) =>{
    return function(dispatch) {
        return axios.get(`http://localhost:3001/dogs?name=${name}`)
        .then(({data}) => {
            dispatch({type: 'GET_DOGS_BY_NAME', payload: data})
        })
        .catch((e) => console.log(e))
    }
}

export const getDogDetail = (id) =>{
    return function(dispatch){
        return axios.get('http://localhost:3001/dogs/' + id)
        .then(({data}) =>{
            dispatch({type: 'GET_DOG_DETAIL', payload: data})
        })
    }
}

export const createDog = (newDog) =>{
    return function(dispatch){
        return axios.post('http://localhost:3001/dogs', {newDog})
        .then(({data}) =>{
            dispatch({type: 'CREATE_DOG', payload: data})
        })
        .then(() => alert("Dog succesfully created!!!"))
        .catch(e => console.log(e))
    }
}

export const getTemperaments = () =>{
    return function(dispatch){
        return axios.get('http://localhost:3001/temperaments')
        .then(({data}) => {
            dispatch({type: 'GET_TEMPERAMENTS', payload: data})
        })
    }
}

export const resetDogDetail = () =>{
    return {type: 'RESET_DOG_DETAIL'}
}

export const orderByName = (payload) =>{
    return {type: 'ORDER_BY_NAME', payload}
}

export const orderByWeight = (payload) =>{
    return {type: 'ORDER_BY_WEIGHT', payload}
}

export const filterByTemperament = (temp) =>{
    return {type: 'FILTER_BY_TEMPERAMENT', payload: temp}
}

export const filterByApiOrDb = (value) =>{
    return {type: 'FILTER_BY_API_OR_DB', payload: value}
}

export const searchByNameLoading = (payload) =>{
    return {type: 'SEARCH_BY_NAME_LOADING', payload}
}
