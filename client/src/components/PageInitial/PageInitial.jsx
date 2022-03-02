import React from 'react';
import { Link } from 'react-router-dom';

const PageInitial = () =>{

    return (
        <div>
            <h1>Welcome to my dog page</h1>
            <Link to = '/home'>
                <button>Press Start</button>
            </Link>
        </div>
    )
}

export default PageInitial;