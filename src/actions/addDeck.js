export const addDeck = data => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/decks", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(deck => dispatch({ type: "ADD_DECK", payload: deck }));
  };
};

// data should be an object like 
// {
//   name: "deck name"
//   batter_ids: [1,2,3]
//   pitcher_ids: [3,4,5]
// }
// const batter_ids = selectedPlayers.batters.map(batter => batter.id)