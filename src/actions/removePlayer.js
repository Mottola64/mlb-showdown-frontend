export default function removePlayerFromDeck(player) {
    return {
      type: "REMOVE_SELECTED_PLAYER",
      payload: player,
    };
  }
  