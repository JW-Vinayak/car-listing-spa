import * as actions from "./carListActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action to begin fetch cars", () => {
    const expectedAction = {
      type: actions.FETCH_CARS_BEGIN
    };
    expect(actions.fetchCarsBegin()).toEqual(expectedAction);
  });

  it("should create an action to inform fetch cars failure", () => {
    let error = {};
    const expectedAction = {
      type: actions.FETCH_CARS_FAILURE,
      payload: { error }
    };
    expect(actions.fetchCarsFailure(error)).toEqual(expectedAction);
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_CARS_SUCCESS when fetching cars has been done", () => {
    let cars = {
      cars: [
        {
          stockNumber: 10019,
          manufacturerName: "Mercedes-Benz",
          modelName: "GLC-Klasse",
          color: "blue",
          mileage: { number: 181526, unit: "km" },
          fuelType: "Petrol"
        }
      ]
    };
    fetchMock.getOnce("http://localhost:3001/cars?color=red", {
      body: cars,
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: actions.FETCH_CARS_BEGIN },
      { type: actions.FETCH_CARS_SUCCESS, payload: cars }
    ];
    const store = mockStore({ cars: [], filters: { color: "red" } });

    return store.dispatch(actions.fetchCars()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
