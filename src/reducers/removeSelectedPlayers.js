export default function removeSelectedPlayers(
  state = { batters: [], pitchers: [] },
  action
) {
  switch (action.type) {
    case "REMOVE_SELECTED_PLAYER":
      const currentStateremove = { ...state };
      action.payload.type === "batter"
        ? (currentStateremove.selectedPlayers = [
            state.selectedPlayers.filter(
              ({ batter }) => batter !== action.payload
            ),
          ])
        : (currentStateremove.selectedPlayers = [
            state.selectedPlayers.filter(
              ({ pitcher }) => pitcher !== action.payload
            ),
          ]);
      return currentStateremove;
    default:
      return state;
  }
}
