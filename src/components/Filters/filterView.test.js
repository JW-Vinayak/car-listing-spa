import React from "react";
import { shallow } from "enzyme";
import FilterView from "./filterView";

function setup() {
  const enzymeWrapper = shallow(<FilterView />);

  return {
    enzymeWrapper
  };
}

describe("CarListView", () => {
  it("should render self and two filter components", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".filter").length).toBe(2);
  });
});
