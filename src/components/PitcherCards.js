import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PaginationPitchers from '../components/PaginationPitchers'
import {Link} from 'react-router-dom'

import Pitchers from '../components/Pitchers'

const PitcherCards = () => {

    const [pitchers, setPitchers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pitchersPerPage] = useState(24);

    useEffect(() => {
        const fetchPitchers = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:3000/api/v1/pitchers')
            setPitchers(res.data);
            setLoading(false);
        }
        
        fetchPitchers();
    }, []);

    //Get Current Posts

    const indexOfLastPitcher = currentPage * pitchersPerPage;
    const indexOfFirstPitcher = indexOfLastPitcher - pitchersPerPage;
    const currentPitchers = pitchers.slice(indexOfFirstPitcher, indexOfLastPitcher)
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return(
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Pitchers</h1>
            <Pitchers pitchers={currentPitchers} loading={loading} />
            <PaginationPitchers pitchersPerPage={pitchersPerPage} totalPitchers={pitchers.length} paginate={paginate} />
        </div>
    )

}

export default PitcherCards