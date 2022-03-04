import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTemperaments, createDog } from '../../actions';
import validate from './validate';

const CreateDog = () => {

    const [input, setInput] = useState({
        name: "",
        temperament: [],
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        origin: "",
    })
    const [error, setError] = useState({});
    const {temperaments} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!temperaments.length) {
            dispatch(getTemperaments())
            .then(() => console.log('cargados'))
        }
    }, [dispatch, temperaments.length])

    function handleChange(e){
        setInput({...input, [e.target.name]: e.target.value});

        let objError = validate({...input, [e.target.name]: e.target.value});
        setError(objError)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(createDog(input))
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <>
                <label htmlFor="name">Name: </label>
                <input type="text" id='name' placeholder='name...' value={input.name} onChange={e=>handleChange(e)} name={'name'} />
            </>
            {error.name && (<span>{error.name}</span>)}
            <br />
            <>
                <label htmlFor="minHeight">Height: </label>
                <input type="text" id='minHeight' placeholder='min...' value={input.height_min} onChange={e=>handleChange(e)} name='height_min' />
                <label > - </label>
                <input type="text"  placeholder='max...' value={input.height_max} onChange={e=>handleChange(e)} name='height_max' />
                <label >cm</label>
            </>
            {error.height && (<span>{error.height}</span>)}
            <br />
            <>
                <label htmlFor="weight">Weight: </label>
                <input type="text" id='weight' placeholder='min...' value={input.weight_min} onChange={e=>handleChange(e)} name='weight_min' />
                <label > - </label>
                <input type="text" placeholder='max...' value={input.weight_max} onChange={e=>handleChange(e)} name='weight_max' />
                <label >kg</label>
            </>
            {error.weight && (<span>{error.weight}</span>)}
            <br />
            <>
                <label htmlFor="life">Life-span: </label>
                <input type="text" id='life' placeholder='min...' value={input.life_span_min} onChange={e=>handleChange(e)} name='life_span_min' />
                <label > - </label>
                <input type="text" placeholder='max...' value={input.life_span_max} onChange={e=>handleChange(e)} name='life_span_max' />
                <label >years</label>
            </>
            {error.life_span && (<span>{error.life_span}</span>)}
            <br />
            <>
                <label htmlFor="origin">Origin: </label>
                <input type="text" id='origin' placeholder='country...' value={input.origin} onChange={e=>handleChange(e)} name='origin' />
            </>
            {error.origin && (<span>{error.origin}</span>)}
            <br />
            <>
                <label htmlFor="temp">Temperament/s: </label>
                <input type="text" id='temp' placeholder='temperament...' value={input.temperament} onChange={e=>handleChange(e)} name='temperament' />
                <select name="" id="">
                    {
                        temperaments?.map(temp =>{
                            return (<option value="temp" key={temp.id}>{temp.name}</option>)
                        })
                    
                    }
                </select>
            </>
            <img src="" alt="" />
            <button type='submit'>Create</button>
        </form>
    )
}
//hacer los temperament
// cuando haga el css, me creo una clase para poner el input rojo 
export default CreateDog;