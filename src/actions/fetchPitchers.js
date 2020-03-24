export function fetchPitchers() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/pitchers")
      .then(response => response.json())
      .then(pitchers =>
        dispatch({
          type: "FETCH_PITCHERS",
          payload: pitchers.data
        })
      );
  };
}
