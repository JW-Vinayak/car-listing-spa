export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const setCurrentPage = pageNumber => ({
  type: SET_CURRENT_PAGE,
  payload: { pageNumber }
});
