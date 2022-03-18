import React from 'react';
import { useSelector } from 'react-redux';
/* import { Link } from 'react-router-dom'; */

import Dog from '../Dog/Dog'
import Loading from '../Loading/Loading'
import s from './Dogs.module.css'
import image from './28459274-illustration-de-bande-dessinée-de-chien-ou-chiot-triste-mignon.jpg'

const Dogs = ({currentDogs}) =>{
    const {loading} = useSelector(state => state);
    return (
        <>
        {
            loading === true
            ? <Loading />
            :
        (<ul className={s.container}>
            {
                currentDogs?.length
                ? currentDogs.map(dog =>{
                    return (
                        <li key={dog.id} >
                            {/* <Link to ={`/home/dog/${dog.id}/detail`} className={s.deleteUnderlined} > */}
                                <Dog 
                                key={dog.id}
                                image={dog.image}
                                name={dog.name}
                                weight={dog.weight}
                                temperament={dog.temperament}
                                created_by_me={dog.created_by_me}
                                id={dog.id}
                                />
                            {/* </Link> */}
                        </li>
                    )
                })
                : (
                    <div className={s.dogNotFound} >
                        <h1 className={s.title} >No dogs with that name were found</h1>
                        <img className={s.image} src={image} alt="not found" />
                    </div>
                )
            }
        </ul>)
        }
    </>
    )
}

    

export default Dogs;