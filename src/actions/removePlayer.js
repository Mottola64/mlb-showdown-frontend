export default function removePlayer(player) {
    return {
      type: "REMOVE_SELECTED_PLAYER",
      payload: player,
    };
  }
  