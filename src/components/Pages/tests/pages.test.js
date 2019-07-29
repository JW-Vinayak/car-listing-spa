import React from "react";
import HomePage from "../HomePage/homePageView";
import CarDetailsPage from "../CarDetailsPage/carDetailsPageView";
import PageNouFoundPage from "../NotFoundPage/notFoundPageView";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

let store = mockStore({
  cars: {
    list: [],
    loading: false,
    error: false
  },
  filters: {},
  pagination: {},
  sorter: {}
});

let match = {
  params: {
    stockNumber: 1234
  }
};

describe("HomePage component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HomePage />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("CarDetailsPage component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<CarDetailsPage match={match} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("PageNouFoundPage component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer
      .create(
        <Router>
          <PageNouFoundPage />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
