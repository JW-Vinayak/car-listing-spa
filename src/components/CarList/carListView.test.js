import React from "react";
import { shallow } from "enzyme";
import CarListView from "./carListView";

function setup() {
  const props = {
    error: null,
    loading: false,
    cars: [{ name: "Tesla" }, { name: "BMW" }],
    dispatch: jest.fn()
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
    dispatch: jest.fn()
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

  it("should fire one action when component mounts", () => {
    const { props } = setup();
    expect(props.dispatch.mock.instances.length).toBe(1);
  });
});
