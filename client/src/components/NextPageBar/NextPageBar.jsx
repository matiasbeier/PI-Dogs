import React from 'react';
import s from './NextPageBar.module.css'

const NextPageBar = ({postPerPage, totalPost, paginate}) =>{
    const totalPage = [];

    for (let i = 1 ; i <= Math.ceil(totalPost / postPerPage) ; i++) {
        totalPage.push(i);
    }
    return (
        <nav>
            <ol className={s.ol}>
                {
                    totalPage?.map(number =>{
                        return (
                            <li key={number}>
                                <a onClick={() => paginate(number)} href='#!' className={s.numberStyle} >
                                    {number}
                                </a>
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
    )
}

export default NextPageBar;