export const GET_LOCATIONS = 'GET_LOCATIONS';

export const getlocations = () => {
  return async dispatch => {
    fetch("https://locations42i.herokuapp.com/locations")
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "GET_LOCATIONS",
          payload: data
        });
      })
  }
}

