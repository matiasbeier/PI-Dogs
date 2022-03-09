import React from 'react';
import { Link } from 'react-router-dom';

import Dog from '../Dog/Dog'
import s from './Dogs.module.css'

const Dogs = ({currentDogs, loading}) =>{
    return loading 
    ? (<h1>Loading...</h1>)
    : (
        <ul className={s.container}>
            {
                currentDogs?.map(dog =>{
                    return (
                        <li key={dog.id} >
                            <Link to ={`/home/dog/${dog.id}/detail`} className={s.deleteUnderlined} >
                                <Dog 
                                key={dog.id}
                                image={dog.image}
                                name={dog.name}
                                weight={dog.weight}
                                temperament={dog.temperament}
                                />
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

    

export default Dogs;