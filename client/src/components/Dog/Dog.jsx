import React from 'react';
import s from './Dog.module.css'

const Dog = ({image, name, weight,temperament}) =>{
    return (
        <div className={s.card}>
            <img src={image} alt="dog" className={s.img}/>
            <h1>{name}</h1>
            <h2>{weight} kg</h2>
            <h2>{temperament && temperament}</h2>
        </div>
    )
}

export default Dog;