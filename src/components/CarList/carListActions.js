import { getCarList } from "../../utils/api";
import { formQueryString } from "../../utils/utility";

import {
  ASCENDING_MILEAGE_SORTING,
  DESCENDING_MILEAGE_SORTING
} from "../../common/constants";

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
      sorter = getState().sorter.mileage,
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
    if (sorter) {
      if (sorter ===  ASCENDING_MILEAGE_SORTING) {
        params.sort = 'asc'
      }
      else if (sorter === DESCENDING_MILEAGE_SORTING) {
        params.sort = "des"
      }
    }

    let queryString = formQueryString(params);

    dispatch(fetchCarsBegin());

    return getCarList(queryString)
      .then(json => {
        dispatch(fetchCarsSuccess(json.cars));
        dispatch(
          setRecordInfo({
            totalPages: json.totalPageCount,
            totalRecords: json.totalCarsCount
          })
        );
        return json.cars;
      })
      .catch(error => dispatch(fetchCarsFailure(error)));
  };
}
