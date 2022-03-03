import React from 'react';
import { Link } from 'react-router-dom';
import Filters from '../Filters/Filters';
import SearchBar from '../SearchBar/SearchBar';
import SortDog from '../SortDog/SortDog'


const NavBar = () =>{
    return (
        <div>
            <Link to='/home'>
                Home
            </Link>
            <Link to='/home/dog/create'>
                Create
            </Link>
            <SearchBar />
            <Filters />
            <SortDog />
        </div>
    )
}

export default NavBar;