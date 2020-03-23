import React from 'react'
import {Route, Link} from 'react-router-dom'
import Batter from '../components/Batter'
  
const Batters = (props) => {

  console.log(props.batters)
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