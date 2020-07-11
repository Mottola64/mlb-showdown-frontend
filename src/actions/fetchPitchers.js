export function fetchPitchers() {
  return (dispatch) => {
    fetch("https://mlb-showdown-backend.herokuapp.com/api/v1/pitchers")
      .then((response) => response.json())
      .then((pitchers) =>
        dispatch({
          type: "FETCH_PITCHERS",
          payload: pitchers.data,
        })
      );
  };
}
