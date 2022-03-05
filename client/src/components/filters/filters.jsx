import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByTemperament } from '../../actions';

const Filters = () =>{

    const dispatch = useDispatch();
    const {temperaments} = useSelector(state => state)

    function handleFilterTemperament(e){
        dispatch(filterByTemperament(e.target.value));
    }

/*     function handleFilterByApiOrDb(e){
        dispatch(filterByApiOrDb(e.target.value));
    } */

    return (
        <div>
            <select >
                <option value="all">All</option>
                <option value="api">Existings</option>
                <option value="created">Created</option>
            </select>
            <select onClick={e =>handleFilterTemperament(e)} >
                <option value="all">All</option>
                {
                    temperaments?.map(temp =>{
                        return (
                            <option value={temp.name} key={temp.id} >
                                {temp.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filters;