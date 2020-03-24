export default function pitchers(state = [], action) {
  switch (action.type) {
    case "FETCH_PITCHERS":
      return action.payload;
    default:
      return state;
  }
}
