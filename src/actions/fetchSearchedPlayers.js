export function fetchSearchedPlayers(searchType, query) {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/${searchType}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "GET",
      params: { query }
    })
      .then(response => response.json())
      .then(batters =>
        dispatch({
          type: "FETCH_SEARCHED_PLAYERS",
          payload: batters.data
        })
      );
  };
}
