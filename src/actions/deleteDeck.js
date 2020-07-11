export function deleteDeck(id) {
  return (dispatch) => {
    return fetch(`https://mlb-showdown-backend.herokuapp.com/api/v1/decks/${id}`, {
      method: "DELETE",
    }).then((decks) => dispatch({ type: "DELETE_DECK", payload: decks }));
  };
}
