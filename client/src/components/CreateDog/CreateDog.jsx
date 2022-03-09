import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTemperaments, createDog } from '../../actions';
import validate from './validate';
import NavBar from '../NavBar/NavBar';
import s from './CreateDog.module.css'
import h from '../Home/Home.module.css'

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

        let objError = validate({...input, [e.target.name]: e.target.value}, temperaments);
        setError(objError)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createDog(input))
    }

    function handleSelectTemperament(e){
        if(input.temperament === "") setInput({...input, temperament: []})
        if (Array.isArray(input.temperament)){

            if(input.temperament.includes("")){
                setInput({...input, temperament: [...input.temperament.filter(t=> t !== ""), e.target.value]})
                e.target.value = false
            } else {
                setInput({...input, temperament: [...input.temperament, e.target.value]})
                e.target.value = false
            }
        }
        if(typeof(input.temperament) === "string" && input.temperament !== ""){
            let arr = input.temperament.split(',');
            setInput({...input, temperament: arr})
        }
    }


    return (
        <div className={h.background}>
            <NavBar />
            <form className={s.container} onSubmit={e => handleSubmit(e)}>
                <>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' placeholder='name...' value={input.name} onChange={e=>handleChange(e)} name={'name'} className={s.inputStyle}/>
                </>
                {error.name && (<span>{error.name}</span>)}
                <br />
                <>
                    <label htmlFor="minHeight">Height: </label>
                    <input type="text" id='minHeight' placeholder='min...' value={input.height_min} onChange={e=>handleChange(e)} name='height_min' className={s.inputNumberStyle}/>
                    <label > - </label>
                    <input type="text"  placeholder='max...' value={input.height_max} onChange={e=>handleChange(e)} name='height_max' className={s.inputNumberStyle}/>
                    <label >cm</label>
                </>
                {error.height && (<span>{error.height}</span>)}
                <br />
                <>
                    <label htmlFor="weight">Weight: </label>
                    <input type="text" id='weight' placeholder='min...' value={input.weight_min} onChange={e=>handleChange(e)} name='weight_min' className={s.inputNumberStyle}/>
                    <label > - </label>
                    <input type="text" placeholder='max...' value={input.weight_max} onChange={e=>handleChange(e)} name='weight_max' className={s.inputNumberStyle}/>
                    <label >kg</label>
                </>
                {error.weight && (<span>{error.weight}</span>)}
                <br />
                <>
                    <label htmlFor="life">Life-span: </label>
                    <input type="text" id='life' placeholder='min...' value={input.life_span_min} onChange={e=>handleChange(e)} name='life_span_min' className={s.inputNumberStyle}/>
                    <label > - </label>
                    <input type="text" placeholder='max...' value={input.life_span_max} onChange={e=>handleChange(e)} name='life_span_max' className={s.inputNumberStyle}/>
                    <label >years</label>
                </>
                {error.life_span && (<span>{error.life_span}</span>)}
                <br />
                <>
                    <label htmlFor="origin">Origin: </label>
                    <input type="text" id='origin' placeholder='country...' value={input.origin} onChange={e=>handleChange(e)} name='origin' className={s.inputStyle}/>
                </>
                {error.origin && (<span>{error.origin}</span>)}
                <br />
                <>
                    <label htmlFor="temp">Temperament/s: </label>
                    <input  id='temp' placeholder='temperament...' value={input.temperament} onChange={e=>handleChange(e)} name='temperament' className={s.inputStyle}/>
                    <select onChange={(e)=>handleSelectTemperament(e)} className={s.selectStyle} >
                        <option ></option>
                        {
                            temperaments?.map(temp =>{
                                return (<option value={temp.name} key={temp.id}>{temp.name}</option>)
                            })
                        }
                    </select>
                </>
                {error.temperament && (<span>{error.temperament}</span>)}
                <br />
                <img src="" alt="" />
                <button className={s.btn} type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateDog;