import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByTemperament, filterByApiOrDb } from '../../actions';

const Filters = () =>{

    const dispatch = useDispatch();
    const {temperaments} = useSelector(state => state)

    function handleFilterTemperament(e){
        dispatch(filterByTemperament(e.target.value));

    }

    function handleFilterByApiOrDb(e){
        dispatch(filterByApiOrDb(e.target.value));
    }

    return (
        <div>
            <select onChange={e =>handleFilterByApiOrDb(e)} >
                <option value="all">All</option>
                <option value={false}>Existings</option>
                <option value={true}>Created</option>
            </select>
            <select onChange={e =>handleFilterTemperament(e)} >
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