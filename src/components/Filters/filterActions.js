export const SET_COLOR = "SET_COLOR";
export const SET_MANUFACTURER = "SET_MANUFACTURER";
export const SET_FILTER = "SET_FILTER";

export const setColorFilter = color => ({
  type: SET_COLOR,
  payload: { color }
});

export const setManufacturerFilter = manufacturer => ({
  type: SET_MANUFACTURER,
  payload: { manufacturer }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});
