export default function batters(state = [], action) {
  switch (action.type) {
    case "FETCH_BATTERS":
      return action.payload;
    case "FETCH_SEARCHED_PLAYERS":
      return action.payload;
    default:
      return state;
  }
}
