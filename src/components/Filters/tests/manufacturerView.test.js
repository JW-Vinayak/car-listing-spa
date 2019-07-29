import React from "react";
import { mount } from "enzyme";
import ManufacturerView from "../Manufacturer/manufacturerView";

function setup() {
  const enzymeWrapper = mount(<ManufacturerView />);

  return {
    enzymeWrapper
  };
}

describe("ManufacturerView", () => {
  it("should render manufacturer view", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("select option").length).toBe(1);
  });
});
