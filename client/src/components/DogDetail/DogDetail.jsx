import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDogDetail, resetDogDetail } from '../../actions';
import NavBar from "../NavBar/NavBar"
import h from '../Home/Home.module.css'

const DogDetail = ({match}) => {

    const dispatch = useDispatch();
    const {dog} = useSelector(state => state)

    useEffect(()=>{
        dispatch(getDogDetail(match.params.id))
        return dispatch(resetDogDetail())
    }, [dispatch, match.params.id])

    return (
        <div className={h.background}>
            <NavBar />
            {
                dog ?
                <div>
                    <img src={dog.image?.url} alt="dog detail" />
                    <h1>{dog.name}</h1>
                    <h3>{dog.temperament}</h3>
                    <h3>{dog.height?.metric} cm</h3>
                    <h3>{dog.weight?.metric} kg</h3>
                    <h3>{dog.life_span} years</h3>
                    <h3>{dog.origin}</h3>
                </div>
                : <h1>perro no encontrado</h1> // mejorar
            }
        </div>
    )
}

export default DogDetail;