import React from 'react';
import { useDispatch } from 'react-redux';
import { orderAsc, orderDes } from '../../actions';

const SortDog = () =>{

    const dispatch = useDispatch();
    
    function handleSort(e){
        e.target.value === "asc"
            ? dispatch(orderAsc())
            : dispatch(orderDes())
    }

    return (
        <div>
            <select name="" id="">
                <option value="asc" onClick={e => handleSort(e)}>a-z</option>
                <option value="desc" onClick={e => handleSort(e)}>z-a</option>
            </select>
            <select name="" id="">
                <option value="ligth">ligthweight</option>
                <option value="heavy">heavyweight</option>
            </select>
        </div>
    )
}

export default SortDog;