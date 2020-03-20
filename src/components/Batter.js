import React from 'react'
import BattersContainer from '../containers/BattersContainer'

const Batter = (props) => {
    // eslint-disable-next-line
    let batter = props.batters.find(batter => batter.id == props.match.params.id)
   
    return (
        <div>
            <h2>
                {batter ? batter.full_name : null}
            </h2>
            <h3>
                {batter ? batter.team : null}
            </h3>
            
            <BattersContainer batter={batter}/>
        </div>

    )
}

export default Batter