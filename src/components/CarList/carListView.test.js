import React from "react";
import { shallow } from "enzyme";
import CarListView from "./carListView";
import { NO_MILEAGE_SORT } from "../../common/constants";

function setup() {
  const props = {
    error: null,
    loading: false,
    cars: [{ name: "Tesla" }, { name: "BMW" }],
    fetchCars: jest.fn(),
    filters: {
      color: "red",
      manufacturer: "BMW"
    },
    sorter: {
      mileage: NO_MILEAGE_SORT
    }
  };

  const enzymeWrapper = shallow(<CarListView {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

function setupFailure() {
  const props = {
    error: { message: "error" },
    dispatch: jest.fn(),
    filters: {
      color: "red",
      manufacturer: "BMW"
    }
  };

  const enzymeWrapper = shallow(<CarListView {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("CarListView", () => {
  it("should render self and subcomponents", () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find("CarItem").length).toBe(2);
    const carItemProps = enzymeWrapper
      .find("CarItem")
      .at(0)
      .props();
    expect(carItemProps.car).toStrictEqual({ name: "Tesla" });
  });

  it("should not render car items in case of error", () => {
    const { enzymeWrapper } = setupFailure();
    expect(enzymeWrapper.find("CarItem").length).toBe(0);
  });
});
