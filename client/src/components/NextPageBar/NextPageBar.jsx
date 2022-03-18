import React from 'react';
import s from './NextPageBar.module.css'
import {MdOutlineNavigateBefore} from 'react-icons/md'
import {BiFirstPage} from 'react-icons/bi'
import {MdNavigateNext} from 'react-icons/md'
import {BiLastPage} from 'react-icons/bi'

const NextPageBar = ({postPerPage, totalPost, paginate, currentPage}) =>{
    const totalPage = [];

    for (let i = 1 ; i <= Math.ceil(totalPost / postPerPage) ; i++) {
        totalPage.push(i);
    }
    const PageRender = totalPage.slice(currentPage === 1 ? currentPage -1 : currentPage - 2 , currentPage === 1 ? currentPage + 2 : currentPage +1)
    return (
        <nav>
            <ol className={s.ol}>
                <li>
                    <a onClick={() => paginate(1)} href='#!' className={totalPage.length ? s.symbolStyle : s.notSymbol}><BiFirstPage/></a>
                </li>
                <li>
                    <a onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)} href='#!' className={totalPage.length ? s.symbolStyle : s.notSymbol}><MdOutlineNavigateBefore/></a>
                </li>
                {
                    PageRender?.map(number =>{
                        return (
                            <li key={number} >
                                <a onClick={() => paginate(number)} href='#!' className={number === currentPage ? s.currentNumber : s.numberStyle} >
                                    {number}
                                </a>
                            </li>
                        )
                    })
                }
                <li>
                    <a onClick={() => paginate(currentPage < totalPage.length ? currentPage + 1 : currentPage)} href='#!' className={totalPage.length ? s.symbolStyle : s.notSymbol} ><MdNavigateNext/></a>
                </li>
                <li>
                    <a onClick={() => paginate(totalPage.length)} href='#!' className={totalPage.length ? s.symbolStyle : s.notSymbol}><BiLastPage/></a>
                </li>
            </ol>
        </nav>
    )
}

export default NextPageBar;