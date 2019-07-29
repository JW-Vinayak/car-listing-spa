import React from "react";
import thunk from "redux-thunk";
import Filter from "../filterContainer";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

let store = mockStore({
  filters: {
    color: "red",
    manufacturer: "BMW"
  }
});

describe("Filter component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<Filter store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
