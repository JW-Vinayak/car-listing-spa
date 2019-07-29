import reducer from "../filterReducer";
import * as actions from "../filterActions";

let initialState = {
  color: "",
  manufacturer: ""
};
describe("filter reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_FILTER", () => {
    let filter = {
      color: "black",
      manufacturer: "BMW"
    };
    expect(
      reducer(initialState, {
        type: actions.SET_FILTER,
        payload: filter
      })
    ).toEqual(filter);
  });
});
