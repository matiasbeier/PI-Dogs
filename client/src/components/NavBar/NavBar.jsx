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
        <>
            {
                location.pathname === '/home'
                ? (
                <>
                    <div className={s.container2}></div>
                    <div className={s.container3}></div>
                    <button onClick={e => handleRefresh(e)} className={s.btn1}>Home</button>
                </>
                )
                : (
                    <>
                        <div className={s.container}></div> 
                        <Link to='/home'>
                            <button className={s.btn1}>Home</button>
                        </Link>
                    </>
                )
            }
            {
                location.pathname !== '/home/dog/create' &&
                    <Link to='/home/dog/create'>
                        <button className={s.btn2}>Create</button>
                    </Link>
            }

        </>
    )
}

export default NavBar;