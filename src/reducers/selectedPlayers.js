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
      let currentStateremove = { ...state };
      action.payload.type === "batter"
        ? (currentStateremove = [
            currentStateremove.batters.filter((id) => id !== action.payload.id),
          ])
        : (currentStateremove = [
            currentStateremove.pitchers.filter(
              (id) => id !== action.payload.id
            ),
          ]);
      return currentStateremove;
    default:
      return state;
  }
}
