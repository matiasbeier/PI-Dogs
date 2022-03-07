import React from 'react';

const Dog = ({image, name, weight,temperament}) =>{
    return (
        <div>
            <img src={image} alt="dog not found" />
            <h1>{name}</h1>
            <h3>{weight}</h3>
            <h3>{temperament}</h3>
        </div>
    )
}

export default Dog;