import React from 'react';
import { Link } from 'react-router-dom';

import Dog from '../Dog/Dog'

const Dogs = ({currentDogs, loading}) =>{
    return loading 
    ? (<h1>Loading...</h1>)
    : (
        <ul>
            {
                currentDogs?.map(dog =>{
                    return (
                        <li key={dog.id}>
                            <Link to ={`/home/dog/${dog.id}/detail`}  >
                                <Dog 
                                key={dog.id}
                                image={dog.image}
                                name={dog.name}
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