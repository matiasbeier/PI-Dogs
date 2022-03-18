import React from 'react';
import s from './Dog.module.css'
import { useDispatch} from 'react-redux';
import { deleteDog } from '../../actions';
import { Link } from 'react-router-dom';

const Dog = ({image, name, weight, temperament, created_by_me, id}) =>{
    const dispatch = useDispatch()

    function handleClickDelete(e){
        dispatch(deleteDog(id))
    }

    return (
        <>
            <div className={s.card}>
                <Link to ={`/home/dog/${id}/detail`} className={s.deleteUnderlined} >
                        <img src={image} alt="dog" className={s.img}/>
                        <h1>{name}</h1>
                        <h2>{weight} kg</h2>
                        <h2>{temperament && temperament}</h2>
                </Link>
                {
                    created_by_me === true &&
                    <button onClick={e => handleClickDelete(e)} className={s.btn} >x</button>
                }
            </div>
        </>
    )
}

export default Dog;