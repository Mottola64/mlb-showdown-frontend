import React from 'react'

const Batter = (props) => {

  console.log(props)
  // let batter = props.batters[props.match.params.id - 1]
  let batter = props.batters.find(batter => batter.id == props.match.params.id)[0]

  return (

    <div>
      <h2>
        {batter ? batter.full_name : null} - {batter ? batter.team : null}
      </h2>
    </div>
  )


}

export default Batter