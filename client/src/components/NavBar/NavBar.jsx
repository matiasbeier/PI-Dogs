import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () =>{
    return (
        <div>
            <Link to='/home'>
                Home
            </Link>
            <Link to='/home/dog/create'>
                Create
            </Link>
        </div>
    )
}

export default NavBar;