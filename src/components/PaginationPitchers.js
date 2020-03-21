import React from 'react'
import {Route} from 'react-router-dom'

const PaginationPitchers = ({ pitchersPerPage, totalPitchers, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPitchers / pitchersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                <Route path="">
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='pitchers/pages/!#' className='page-link'>
                        {number}
                        </a>
                    </li>
                    ))}
                </Route>
            </ul>

        </nav>
    )
}

export default PaginationPitchers