import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { getAllDogs } from '../../actions';
import s from './NavBar.module.css'

const NavBar = () =>{
    const location = useLocation();
    const dispatch = useDispatch();

    function handleRefresh(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }

    return (
        <div className={s.container} >
            {
                location.pathname === '/home'
                ? (<button onClick={e => handleRefresh(e)} className={s.btn}>Home</button>)
                : (
                    <Link to='/home'>
                        <button className={s.btn}>Home</button>
                    </Link>
                )
            }
            <Link to='/home/dog/create'>
                <button className={s.btn}>Create</button>
            </Link>
        </div>
    )
}

export default NavBar;