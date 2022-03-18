import React from 'react';
import { Link } from 'react-router-dom';
import s from './PageInitial.module.css'
import video from './Leaf - 19614.mp4'
import poster from './poster.png'

const PageInitial = () =>{

    return (
        <>
            <h1 className={s.welcome} >Welcome to my dog page</h1>
            <video autoPlay muted loop poster={poster} className={s.backgroundInitial}>
                <source src={video} type="video/mp4"/>
            </video>
            <Link to = '/home'>
                <button className={s.btn} >Press Start</button>
            </Link>
            <div className={s.phrase} >
            <p>"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals"</p>
            <p>-Sirius Black</p>
            </div>
        </>
    )
}

export default PageInitial;