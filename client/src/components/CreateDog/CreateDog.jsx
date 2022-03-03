import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTemperaments, createDog } from '../../actions';

const CreateDog = () => {

    const {temperaments} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!temperaments.length) {
            dispatch(getTemperaments())
            .then(() => console.log('cargados'))
        }
    }, [dispatch, temperaments.length])

    const [input, setInput] = useState({
        name: "",
        temperament: [],
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: ""
    })

    function handleChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createDog(input))
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <>
                <label htmlFor="name">Name: </label>
                <input type="text" id='name' placeholder='name...' value={input.name} onChange={e=>handleChange(e)} name='name' />
            </>
            <br />
            <>
                <label htmlFor="minHeight">Height: </label>
                <input type="text" id='minHeight' placeholder='min...' value={input.height_min} onChange={e=>handleChange(e)} name='height_min' />
                <label > - </label>
                <input type="text"  placeholder='max...' value={input.height_max} onChange={e=>handleChange(e)} name='height_max' />
            </>
            <br />
            <>
                <label htmlFor="weight">Weight: </label>
                <input type="text" id='weight' placeholder='min...' value={input.weight_min} onChange={e=>handleChange(e)} name='weight_min' />
                <label > - </label>
                <input type="text" placeholder='max...' value={input.weight_max} onChange={e=>handleChange(e)} name='weight_max' />
            </>
            <br />
            <>
                <label htmlFor="life">Life-span: </label>
                <input type="text" id='life' placeholder='min...' value={input.life_span_min} onChange={e=>handleChange(e)} name='life_span_min' />
                <label > - </label>
                <input type="text" placeholder='max...' value={input.life_span_max} onChange={e=>handleChange(e)} name='life_span_max' />
            </>
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

export default CreateDog;