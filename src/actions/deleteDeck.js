export function deleteDeck(id) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/decks/${id}`, {
      method: "DELETE"
    })
      
      .then(decks => dispatch({ type: "DELETE_DECK", payload: decks }));
  };
}
