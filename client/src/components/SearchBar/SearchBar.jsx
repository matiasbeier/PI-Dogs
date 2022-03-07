import React, { useState } from 'react';

import Filters from '../Filters/Filters';
import SortDog from '../SortDog/SortDog';
import { getDogsByName, getTemperaments, filterByTemperament } from '../../actions';
import { useDispatch } from 'react-redux';

const SearchBar = () =>{
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getDogsByName(name))
        dispatch(getTemperaments())
        .then(()=>dispatch(filterByTemperament("all")))
        setName("")
    }

    return (
        <div>
            <form onSubmit={e=> handleSubmit(e)}>
                <input type="text" placeholder='search dog' onChange={e=> handleChange(e)} value={name} name="name"/>
                <button type='submit'>🔍</button>
            </form>
            <Filters />
            <SortDog />
        </div>
    )
}

export default SearchBar;