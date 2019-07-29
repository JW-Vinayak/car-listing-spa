import React from "react";
import thunk from "redux-thunk";
import Sorter from "../sorterContainer";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

let store = mockStore({
  sorter: {
    mileage: "NO_MILEAGE_SORTING"
  }
});

describe("Sorter component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<Sorter store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
