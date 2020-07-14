export default function removeSelectedPlayers(
  state = { batters: [], pitchers: [], selectedPlayers: [] },
  action
) {
  switch (action.type) {
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
