import { getCarList } from "../../utils/api";
import { formQueryString } from "../../utils/utility";

export const FETCH_CARS_BEGIN = "FETCH_CARS_BEGIN";
export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";
export const FETCH_CARS_FAILURE = "FETCH_CARS_FAILURE";
export const SET_RECORDS_INFO = "SET_RECORDS_INFO";

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

export const setRecordInfo = recordsInfo => ({
  type: SET_RECORDS_INFO,
  payload: { recordsInfo }
});

export function fetchCars() {
  return (dispatch, getState) => {
    let params = {},
      filters = getState().filters,
      pagination = getState().pagination;
    if (filters.color) {
      params.color = filters.color;
    }
    if (filters.manufacturer) {
      params.manufacturer = filters.manufacturer;
    }
    if (pagination.currentPage) {
      params.page = pagination.currentPage;
    }

    let queryString = formQueryString(params);

    console.log("will fire api with", params, queryString);
    dispatch(fetchCarsBegin());
    console.log("sent request to fetch data");

    getCarList(queryString)
      .then(json => {
        console.log("data is fetched", json);
        dispatch(fetchCarsSuccess(json.cars));
        dispatch(
          setRecordInfo({
            totalPages: json.totalPageCount,
            totalRecords: json.totalCarsCount
          })
        );
        console.log("data after dispatch", getState());
        return json.cars;
      })
      .catch(error => dispatch(fetchCarsFailure(error)));
  };
}
