import React from 'react';
import { Link } from 'react-router-dom';
import s from './PageInitial.module.css'

const PageInitial = () =>{

    return (
        <div >
            <h1>Welcome to my dog page</h1>
            <video autoPlay muted loop poster='poster.png' className={s.backgroundInitial}>
                <source src="https://vod-progressive.akamaized.net/exp=1646794246~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F680%2F12%2F303404180%2F1161809405.mp4~hmac=f156a738e199cfa2094ba12e33c1f596012038a5c8f12cf4a0b8d49081a7c663/vimeo-prod-skyfire-std-us/01/680/12/303404180/1161809405.mp4?filename=Leaf+-+19614.mp4" type="video/mp4"/>
            </video>
            <Link to = '/home'>
                <button className={s.btn} >Press Start</button>
            </Link>
        </div>
    )
}

export default PageInitial;