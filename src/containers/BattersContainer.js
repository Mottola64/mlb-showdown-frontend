import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchBatters} from '../actions/fetchBatters'
import Batters from '../components/Batters'
import Batter from '../components/Batter'
class BattersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBatters()
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route path='/batters/:id' render={(routerProps) => <Batter {...routerProps} batters={this.props.batters}/>}/>
                    <Route path='/batters' render={(routerProps) => <Batters {...routerProps} batters={this.props.batters}/>}/>
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        batters: state.batters
    }
}

export default connect(mapStateToProps, {fetchBatters})(BattersContainer);