import React from 'react';

import { Link } from 'react-router-dom';


const NavBar = () =>{

    function handleRefresh(e){
    }

    return (
        <div>
            <Link to='/home'>
                <button onClick={e => handleRefresh(e)}>Home</button>
            </Link>
            <Link to='/home/dog/create'>
                <button>Create</button>
            </Link>
        </div>
    )
}

export default NavBar;