import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import PitchersContainer from './containers/PitchersContainer'
import BattersContainer from './containers/BattersContainer'

class App extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render () {
        const { loggedIn, decks } = this.props
        return (
        <div className="App">
            { loggedIn ? <NavBar deck={this.props.decks}/> : 
                <span>
                    <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
                </span> }
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
                <Route exact path='/login' component={Login} />
                <Route exact path='/pitchers' component={PitchersContainer} />
                <Route exact path='/batters' component={BattersContainer} />
            </Switch>

        </div>
    )
    }
}

const mapStateToProps = state => {
    return ({
      loggedIn: !!state.currentUser,
    })
  }

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App))