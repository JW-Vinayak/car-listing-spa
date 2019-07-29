import React from "react";
import thunk from "redux-thunk";
import Paginator from "../paginatorContainer";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

let store = mockStore({
  pagination: {
    currentPage: 1
  },
  cars: {
    totalPages: 9
  }
});

describe("Paginator component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<Paginator store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
