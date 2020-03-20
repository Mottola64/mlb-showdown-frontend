import React from 'react'
import {Link} from 'react-router-dom'

const Batters = (props) => {

    return (
        <div>
            {props.batters.map(batter =>
                <li key={batter.id}>
                    <Link to={`/batters/${batter.id}`}>{batter.full_name}</Link>
                </li> )}
        </div>
    )

}

export default Batters