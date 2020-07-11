export function fetchBatters() {
  return (dispatch) => {
    fetch("https://mlb-showdown-backend.herokuapp.com/v1/batters")
      .then((response) => response.json())
      .then((batters) =>
        dispatch({
          type: "FETCH_BATTERS",
          payload: batters.data,
        })
      );
  };
}
