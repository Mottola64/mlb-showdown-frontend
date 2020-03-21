import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../components/Pagination'
import {Link} from 'react-router-dom'

import Batters from '../components/Batters'

const BatterCards = () => {

    const [batters, setBatters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [battersPerPage] = useState(24);

    useEffect(() => {
        const fetchBatters = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:3000/api/v1/batters')
            setBatters(res.data);
            setLoading(false);
        }
        
        fetchBatters();
    }, []);

    //Get Current Posts

    const indexOfLastBatter = currentPage * battersPerPage;
    const indexOfFirstBatter = indexOfLastBatter - battersPerPage;
    const currentBatters = batters.slice(indexOfFirstBatter, indexOfLastBatter)
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return(
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Batters</h1>
            <Batters batters={currentBatters} loading={loading} />
            <Pagination battersPerPage={battersPerPage} totalBatters={batters.length} paginate={paginate} />
        </div>
    )

}

export default BatterCards