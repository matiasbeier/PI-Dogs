import React from 'react';
import { useSelector } from 'react-redux';

import Dog from '../Dog/Dog'

const Dogs = () =>{
    const {dogs} = useSelector(state => state)
    return (
        <div>
            {
                dogs.map(dog =>{
                    return (
                        <Dog 
                        key={dog.id}
                        image={dog.image}
                        name={dog.name}
                        temperament={dog.temperament}
                        />
                    )
                }) 
            }
        </div>
    )
}

export default Dogs;