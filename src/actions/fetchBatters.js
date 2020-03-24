export function fetchBatters() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/batters")
      .then(response => response.json())
      .then(batters =>
        dispatch({
          type: "FETCH_BATTERS",
          payload: batters.data
        })
      );
  };
}
