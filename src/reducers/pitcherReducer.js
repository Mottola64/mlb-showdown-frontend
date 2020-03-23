export default function pitcherReducer(state = {pitchers: []}, action) {
    
    switch (action.type) {
        case 'FETCH_PITCHERS':
            return {pitchers: action.payload}
        default:
            return state
    }
}