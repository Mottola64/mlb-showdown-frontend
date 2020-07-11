export function fetchDecks() {
  return (dispatch) => {
    fetch("https://mlb-showdown-backend.herokuapp.com/api/v1/decks")
      .then((response) => response.json())
      .then((decks) =>
        dispatch({
          type: "FETCH_DECKS",
          payload: decks,
        })
      );
  };
}
