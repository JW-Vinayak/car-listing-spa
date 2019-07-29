import React from "react";
import { shallow } from "enzyme";
import SorterView from "../sorterView";

function setup() {
  const props = {};
  const enzymeWrapper = shallow(<SorterView />);
  return {
    enzymeWrapper,
    props
  };
}

describe("sorter view", () => {
  it("should render sorting dropdown", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(".sorter select").length).toBe(1);
  });
});
