export const addDeck = (data) => {
  return (dispatch) => {
    fetch("https://mlb-showdown-backend.herokuapp.com/api/v1/decks", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((deck) => dispatch({ type: "ADD_DECK", payload: deck }));
  };
};
