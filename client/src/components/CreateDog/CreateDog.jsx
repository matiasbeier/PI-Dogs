import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTemperaments, createDog } from '../../actions';
import validate from './validate';
import NavBar from '../NavBar/NavBar';
import s from './CreateDog.module.css'
import h from '../Home/Home.module.css'
import dog1 from './img/87bd5736efc515a1aa6e889c0fba4b1d.jpg'
import dog2 from './img/b3b8a3afc65a17d2a16f072ea25a9a05.jpg'
import dog3 from './img/bbf8b085602becb16675882a50296f2c.jpg'
import dog4 from './img/bd79b8fbc1ec699fdf1f5c07cbc012bd.jpg'

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
        image: ""
    })
    const [error, setError] = useState({});
    const {temperaments} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!temperaments.length) {
            dispatch(getTemperaments())
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
                input.temperament.includes(e.target.value)
                ? setInput({...input})
                : setInput({...input, temperament: [...input.temperament, e.target.value] }) 
        }
        if(typeof(input.temperament) === "string" && input.temperament !== ""){
            let arr = input.temperament.split(',');
            setInput({...input, temperament: arr})
        }
    }

    function handleSelectImage(e){
        setInput({...input, image: e.target.value})
    }


    return (
        <div className={h.background}>
            <NavBar />
            <form className={s.container} onSubmit={e => handleSubmit(e)}>
                <>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' placeholder='name...' value={input.name} onChange={e=>handleChange(e)} name={'name'} className={error.name ? s.errorStyle : s.inputStyle}/>
                </>
                {error.name && (<span>{error.name}</span>)}
                <br />
                <>
                    <label htmlFor="minHeight">Height: </label>
                    <input maxLength={4} type="text" id='minHeight' placeholder='min cm...' value={input.height_min} onChange={e=>handleChange(e)} name='height_min' className={error.height ? s.errorNumberStyle : s.inputNumberStyle}/>
                    <label > - </label>
                    <input maxLength={4} type="text"  placeholder='max cm...' value={input.height_max} onChange={e=>handleChange(e)} name='height_max' className={error.height ? s.errorNumberStyle : s.inputNumberStyle}/>
                </>
                {error.height && (<span>{error.height}</span>)}
                <br />
                <>
                    <label htmlFor="weight">Weight: </label>
                    <input maxLength={4} type="text" id='weight' placeholder='min kg...' value={input.weight_min} onChange={e=>handleChange(e)} name='weight_min' className={error.weight ? s.errorNumberStyle : s.inputNumberStyle}/>
                    <label > - </label>
                    <input maxLength={4} type="text" placeholder='max kg...' value={input.weight_max} onChange={e=>handleChange(e)} name='weight_max' className={error.weight ? s.errorNumberStyle : s.inputNumberStyle}/>
                </>
                {error.weight && (<span>{error.weight}</span>)}
                <br />
                <>
                    <label htmlFor="life">Life-span: </label>
                    <input maxLength={3} type="text" id='life' placeholder='min years...' value={input.life_span_min} onChange={e=>handleChange(e)} name='life_span_min' className={error.life_span ? s.errorNumberStyle : s.inputNumberStyle}/>
                    <label > - </label>
                    <input maxLength={3} type="text" placeholder='max years...' value={input.life_span_max} onChange={e=>handleChange(e)} name='life_span_max' className={error.life_span ? s.errorNumberStyle : s.inputNumberStyle}/>
                </>
                {error.life_span && (<span>{error.life_span}</span>)}
                <br />
                <>
                    <label htmlFor="origin">Origin: </label>
                    <input type="text" id='origin' placeholder='country...' value={input.origin} onChange={e=>handleChange(e)} name='origin' className={error.origin ? s.errorStyle : s.inputStyle}/>
                </>
                {error.origin && (<span>{error.origin}</span>)}
                <br />
                <>
                    <label htmlFor="temp">Temperament/s: </label>
                    <input  id='temp' placeholder='temperament...' value={input.temperament} onChange={e=>handleChange(e)} name='temperament' className={error.temperament ? s.errorStyle : s.inputStyle}/>
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
                <select onChange={(e) => handleSelectImage(e)} className={s.selectStyle}>
                    <option value={dog1}>dog 1</option>
                    <option value={dog2}>dog 2</option>
                    <option value={dog3}>dog 3</option>
                    <option value={dog4}>dog 4</option>
                </select>
                <img className={s.imgStyle} src={input.image} alt="dog" />
                <br />
                {
                    error.name || error.height || error.weight || error.life_span || error.origin || error.temperament
                    ? <button className={s.errorBtn} type='submit' disabled={true}>Create</button>
                    : <button className={input.name === "" ? s.errorBtn : s.btn} type='submit' disabled={input.name === "" ? true : false}>Create</button>
                }
            </form>

        </div>
    )
}

export default CreateDog;