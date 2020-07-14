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

    default:
      return state;
  }
}
