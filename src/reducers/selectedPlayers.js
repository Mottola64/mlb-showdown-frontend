export default function selectedPlayers(
  state = { batters: [], pitchers: [] },
  action
) {
  switch (action.type) {
    case "ADD_SELECTED_PLAYER":
      const currentState = { ...state };
      action.payload.type === "batter"
        ? (currentState.batters = [...state.batters, action.payload])
        : (currentState.pitchers = [...state.pitchers, action.payload]);
      return currentState;

    case "REMOVE_SELECTED_PLAYER":
      const currentStateremove = { ...state };
      action.payload.type === "batter"
        ? (currentStateremove.batters = [state.batters.filter(({ batter }) => batter.id !== action.payload)])
        : (currentStateremove.pitchers = [state.pitchers.filter(({ pitcher }) => pitcher.id !== action.payload)]);
      return currentStateremove;

    default:
      return state;
  }
}
