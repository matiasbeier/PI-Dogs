import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Dog from '../Dog/Dog'

const Dogs = () =>{

    const {dogs} = useSelector(state => state)

    return (
        <div>
            {
                dogs.map(dog =>{
                    return (
                        <Link to ={`/home/dog/${dog.id}/detail`} key={dog.id} >
                            <Dog 
                            key={dog.id}
                            image={dog.image}
                            name={dog.name}
                            temperament={dog.temperament}
                            />
                        </Link>
                    )
                }) 
            }
        </div>
    )
}

export default Dogs;