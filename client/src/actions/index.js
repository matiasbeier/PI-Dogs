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
    }
}
/* export const getDogsByName = (name) =>{
    return function(dispatch) {
        if(name){
            return axios.get(`http://localhost:3001/dogs?name=${name}`)
            .then(({data}) => {
                dispatch({type: 'GET_DOGS', payload: data})
            })            
        } else{
            return axios.get('http://localhost:3001/dogs')
            .then(({data}) => {
                dispatch({type: 'GET_DOGS', payload: data})
            })           
        }
    }
} */
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
    return function(dispatch){
        dispatch({type: 'RESET_DOG_DETAIL'})
    }
}

export const orderAsc = () =>{
    return {type: 'ORDER_ASC'}
}

export const orderDes = () =>{
    return {type: 'ORDER_DES'}
}

export const filterByTemperament = (temp) =>{
    return {type: 'FILTER_BY_TEMPERAMENT', payload: temp}
}

export const filterByApiOrDb = (value) =>{
    return {type: 'FILTER_BY_API_OR_DB', payload: value}
}
