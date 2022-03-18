import React, { useState } from 'react';

import Filters from '../Filters/Filters.jsx';
import SortDog from '../SortDog/SortDog';
import { getDogsByName, getTemperaments, filterByTemperament, searchByNameLoading } from '../../actions';
import { useDispatch } from 'react-redux';
import s from './SearchBar.module.css'
import {BiSearchAlt2} from 'react-icons/bi'

const SearchBar = ({setCurrentPage}) =>{
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchByNameLoading(true))
        dispatch(getTemperaments())
        dispatch(getDogsByName(name))
        .then(()=>{
            dispatch(filterByTemperament("all"))
            dispatch(searchByNameLoading(false))
        })
        setName("")
    }

    return (
            <div className={s.search}>
                <form onSubmit={e=> handleSubmit(e)}>
                    <input className={s.inputStyle} type="text" placeholder='search dog' onChange={e=> handleChange(e)} value={name} name="name"/>
                    <button className={s.btn}><BiSearchAlt2 className={s.icon}/></button>
                </form>
                <Filters setCurrentPage={setCurrentPage} />
                <SortDog />
            </div>
    )
}

export default SearchBar;