export const FETCH_CARS_BEGIN = "FETCH_CARS_BEGIN";
export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";
export const FETCH_CARS_FAILURE = "FETCH_CARS_FAILURE";

const url = "http://localhost:3001/cars";

export const fetchCarsBegin = () => ({
  type: FETCH_CARS_BEGIN
});

export const fetchCarsSuccess = cars => ({
  type: FETCH_CARS_SUCCESS,
  payload: { cars }
});

export const fetchCarsFailure = error => ({
  type: FETCH_CARS_FAILURE,
  payload: { error }
});

export function fetchCars() {
  return (dispatch, getState) => {
    let params = {},
      filters = getState().filters;
    if (filters.color) {
      params.color = filters.color;
    }
    if (filters.manufacturer) {
      params.manufacturer = filters.manufacturer;
    }

    var queryString = Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
    console.log("will fire api with", params, queryString);
    let url =
      "http://localhost:3001/cars" + (queryString ? "?" + queryString : "");
    dispatch(fetchCarsBegin());
    console.log("sent request to fetch data");
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log("data is fetched", json);
        dispatch(fetchCarsSuccess(json.cars));
        return json.cars;
      })
      .catch(error => dispatch(fetchCarsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
