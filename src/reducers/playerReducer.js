export default function playerReducer(state = {batters: []}, action) {
    
    switch (action.type) {
        case 'FETCH_BATTERS':
            return {batters: action.payload}
        default:
            return state
    }
}