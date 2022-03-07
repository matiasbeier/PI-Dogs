import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByName, orderByWeight } from '../../actions';

const SortDog = () =>{

    const dispatch = useDispatch();
    
    function handleSortByName(e){
        dispatch(orderByName(e.target.value))
    }

    function handleSortByWeigth(e){
        dispatch(orderByWeight(e.target.value))
    }

    return (
        <div>
            <select onClick={e => handleSortByName(e)} >
                <option value="asc" >a-z</option>
                <option value="desc" >z-a</option>
            </select>
            <select onClick={e => handleSortByWeigth(e)}>
                <option value="ligth">ligthweight</option>
                <option value="heavy">heavyweight</option>
            </select>
        </div>
    )
}

export default SortDog;