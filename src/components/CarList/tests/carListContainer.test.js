import React from "react";
import thunk from "redux-thunk";
import CarList from "../carListContainer";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

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

describe("Car list component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer
      .create(
        <Router>
          <CarList store={store} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders two car items", () => {
    store = mockStore({
      cars: {
        list: [
          {
            stockNumber: 10019,
            manufacturerName: "Mercedes-Benz",
            modelName: "GLC-Klasse",
            color: "blue",
            mileage: { number: 181526, unit: "km" },
            fuelType: "Petrol"
          },
          {
            stockNumber: 10019,
            manufacturerName: "BMW",
            modelName: "i8",
            color: "black",
            mileage: { number: 12112, unit: "km" },
            fuelType: "Petrol"
          }
        ],
        loading: false,
        error: false
      },
      filters: { color: "", manufacturer: "" },
      pagination: { currentPage: 1 },
      sorter: { mileage: "NO_MILEAGE_SORTING" }
    });
    const tree = renderer
      .create(
        <Router>
          <CarList store={store} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders loading blocks if loading flag is true", () => {
    store = mockStore({
      cars: {
        list: [],
        loading: true,
        error: false
      },
      filters: {},
      pagination: {},
      sorter: {}
    });
    const tree = renderer
      .create(
        <Router>
          <CarList store={store} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders sorted car item due to specified filter", () => {
    store = mockStore({
      cars: {
        list: [
          {
            stockNumber: 10019,
            manufacturerName: "Mercedes-Benz",
            modelName: "GLC-Klasse",
            color: "blue",
            mileage: { number: 181526, unit: "km" },
            fuelType: "Petrol"
          },
          {
            stockNumber: 10019,
            manufacturerName: "BMW",
            modelName: "i8",
            color: "black",
            mileage: { number: 12112, unit: "km" },
            fuelType: "Petrol"
          }
        ],
        loading: false,
        error: false
      },
      filters: { color: "blue", manufacturer: "" },
      pagination: { currentPage: 1 },
      sorter: { mileage: "ASCENDING_MILEAGE_SORTING" }
    });
    const tree = renderer
      .create(
        <Router>
          <CarList store={store} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
