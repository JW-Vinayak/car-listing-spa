import reducer from "./paginatorReducer";
import * as actions from "./paginatorActions";

let initialState = {
  currentPage: 1
};
describe("paginator reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_CURRENT_PAGE", () => {
    expect(
      reducer(initialState, {
        type: actions.SET_CURRENT_PAGE,
        payload: {
          pageNumber: 5
        }
      })
    ).toEqual({
      currentPage: 5
    });
  });
});
