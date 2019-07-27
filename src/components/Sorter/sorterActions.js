export const SET_SORT_ORDER = "SET_SORT_ORDER";

export const setSortOrder = sortOrder => ({
  type: SET_SORT_ORDER,
  payload: { sortOrder }
});
