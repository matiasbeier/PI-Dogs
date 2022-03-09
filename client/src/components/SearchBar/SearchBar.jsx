import React, { useState } from 'react';

import Filters from '../Filters/Filters';
import SortDog from '../SortDog/SortDog';
import { getDogsByName, getTemperaments, filterByTemperament } from '../../actions';
import { useDispatch } from 'react-redux';
import s from './SearchBar.module.css'
import {BiSearchAlt2} from 'react-icons/bi'

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
        <div className={s.search}>
            <form onSubmit={e=> handleSubmit(e)}>
                <input className={s.inputStyle} type="text" placeholder='search dog' onChange={e=> handleChange(e)} value={name} name="name"/>
                <button className={s.btn} type='submit'><BiSearchAlt2 className={s.icon}/></button>
            </form>
            <Filters />
            <SortDog />
        </div>
    )
}

export default SearchBar;