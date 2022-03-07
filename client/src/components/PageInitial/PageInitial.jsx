import React from 'react';
import { Link } from 'react-router-dom';
import s from './PageInitial.module.css'

const PageInitial = () =>{

    return (
        <div className={s.background} >
            <h1>Welcome to my dog page</h1>
            <Link to = '/home'>
                <button>Press Start</button>
            </Link>
        </div>
    )
}

export default PageInitial;