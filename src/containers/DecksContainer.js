import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchDecks} from '../actions/fetchDecks'
import Decks from '../components/Decks'

class DecksContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDecks()
    }

    render() {
        return(
            <div>
                <Decks decks={this.props.decks.data}/>                   
                {/* <Route path='/batters' render={() => <Batters batters={this.props.batters.data}/>}/> */}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        decks: state.decks
    }
}

export default connect(mapStateToProps, {fetchDecks})(DecksContainer);