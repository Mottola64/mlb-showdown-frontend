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
        ? (currentStateremove.selectedPlayers = [
            state.batters.filter(({ batter }) => batter !== action.payload),
          ])
        : (currentStateremove.selectedPlayers = [
            state.pitchers.filter(({ pitcher }) => pitcher !== action.payload),
          ]);
      return currentStateremove;
    default:
      return state;
  }
}
