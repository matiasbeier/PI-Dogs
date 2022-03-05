import React from 'react';

const Dog = ({image, name, temperament}) =>{
    return (
        <div>
            <img src={image} alt="dog's not found" />
            <h1>{name}</h1>
            <h3>{temperament}</h3>
        </div>
    )
}

export default Dog;