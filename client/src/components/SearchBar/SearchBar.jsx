import React from 'react';

import Filters from '../Filters/Filters';
import SortDog from '../SortDog/SortDog'

const SearchBar = () =>{


    return (
        <div>
            <input type="text" placeholder='search dog'/>
            <button type='submit'>🔍</button>
            <Filters />
            <SortDog />
        </div>
    )
}

export default SearchBar;