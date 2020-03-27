export default function pitchers(state = [], action) {
  switch (action.type) {
    case "FETCH_PITCHERS":
      return action.payload;
    case "FETCH_SEARCHED_PLAYERS":
      return { pitchers: state.pitchers };
    default:
      return state;
  }
}
