import React from "react";
import thunk from "redux-thunk";
import PagingInfo from "../pagingInfoView";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

let store = mockStore({
  pagination: {
    currentPage: 1
  },
  cars: {
    totalPages: 8,
    totalRecords: 76
  }
});

describe("PagingInfo component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<PagingInfo store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
