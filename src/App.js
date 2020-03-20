import React from 'react'
import {connect} from 'react-redux'
import BattersContainer from './containers/BattersContainer'

class App extends React.Component {
    render () {
    
    return (
        <div className="App">
            <BattersContainer />
        </div>
    )
    }
}

export default connect()(App);