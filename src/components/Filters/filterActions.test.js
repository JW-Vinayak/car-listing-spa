import * as actions from "./filterActions";


describe("actions", () => {
  it("should create an action to set filters", () => {
    let filter = {
      color: 'black',
      manufacturer: 'BMW'
    }
    const expectedAction = {
      type: actions.SET_FILTER,
      payload: filter
    };
    expect(actions.setFilter(filter)).toEqual(expectedAction);
  });
});

