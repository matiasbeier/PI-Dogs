import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { getAllDogs } from '../../actions';

const NavBar = () =>{
    const location = useLocation();
    const dispatch = useDispatch();

    function handleRefresh(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }

    return (
        <div>
            {
                location.pathname === '/home'
                ? (<button onClick={e => handleRefresh(e)}>Home</button>)
                : (
                    <Link to='/home'>
                        <button >Home</button>
                    </Link>
                )
            }
            <Link to='/home/dog/create'>
                <button>Create</button>
            </Link>
        </div>
    )
}

export default NavBar;