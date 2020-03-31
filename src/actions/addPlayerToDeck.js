export default function addPlayerToDeck(player) {
  return {
    type: "ADD_SELECTED_PLAYER",
    payload: player
  };
}
