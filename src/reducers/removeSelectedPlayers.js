export default function removeSelectedPlayers(
  state = { batters: [], pitchers: [] },
  action
) {
  switch (action.type) {
    case "REMOVE_SELECTED_PLAYER":
      const currentStateremove = { ...state };
      action.payload.type === "batter"
        ? (currentStateremove.selectedPlayers.batters = [
            state.selectedPlayers.batters.filter(
              ({ batter }) => batter !== action.payload
            ),
          ])
        : (currentStateremove.selectedPlayers.pitchers = [
            state.selectedPlayers.pitchers.filter(
              ({ pitcher }) => pitcher !== action.payload
            ),
          ]);
      return currentStateremove;
    default:
      return state;
  }
}
