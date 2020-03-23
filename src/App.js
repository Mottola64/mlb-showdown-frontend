import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/NavBar'
import PitchersContainer from './containers/PitchersContainer'
import BattersContainer from './containers/BattersContainer'

class App extends React.Component {

    render() {

        return (
        <div className="App">  
            <BattersContainer />
        </div>
    )
    }
}

export default App