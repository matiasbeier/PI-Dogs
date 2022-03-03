import React from 'react';
import { useSelector } from 'react-redux';

const Filters = () =>{

    let {temperaments} = useSelector(state => state)

    return (
        <div>
            <select name="" id="">
                <option value="all">All</option>
                <option value="api">Existings</option>
                <option value="created">Created</option>
            </select>
            <select name="" id="">
                <option value="all">All</option>
                {
                    temperaments?.map(temp =>{
                        return (
                            <option value={temp.name} key={temp.id}>{temp.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filters;