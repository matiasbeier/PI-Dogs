import React from 'react';

const NextPageBar = ({postPerPage, totalPost, paginate}) =>{
    const totalPage = [];

    for (let i = 1 ; i <= Math.ceil(totalPost / postPerPage) ; i++) {
        totalPage.push(i);
    }
    return (
        <nav>
            <ul>
                {
                    totalPage?.map(number =>{
                        return (
                            <li key={number}>
                                <a onClick={() => paginate(number)} >
                                    {number}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NextPageBar;