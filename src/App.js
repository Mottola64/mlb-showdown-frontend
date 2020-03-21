import React from 'react'
import {connect} from 'react-redux'
import BattersContainer from './containers/BattersContainer'
import BatterCards from './components/BatterCards'

class App extends React.Component {
    render () {
    
    return (
        <div className="App">
            <BatterCards />
        </div>
    )
    }
}

export default connect()(App);