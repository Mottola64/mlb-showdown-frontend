import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchPitchers} from '../actions/fetchPitchers'
import Pitchers from '../components/Pitchers'

class PitchersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPitchers()
    }
    render() {
        return(
            <div>
            <Pitchers pitchers={this.props.pitchers.data}/>
            <Switch>
                {/* <Route path='/batters/:id' render={(routerProps) => <Batter {...routerProps} batters={this.props.batters}/>}/> */}
                <Route path='/pitchers' render={(routerProps) => <Pitchers {...routerProps} pitchers={this.props.pitchers.data}/>}/>
            </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        pitchers: state.pitchers
    }
}

export default connect(mapStateToProps, {fetchPitchers})(PitchersContainer);