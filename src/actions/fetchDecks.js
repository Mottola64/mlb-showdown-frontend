export function fetchDecks() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/decks")
      .then((response) => response.json())
      .then((decks) =>
        dispatch({
          type: "FETCH_DECKS",
          payload: decks,
        })
      );
  };
}
