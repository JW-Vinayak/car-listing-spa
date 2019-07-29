import React from "react";
import { mount } from "enzyme";
import ColorView from "../Color/colorView";

function setup() {
  const enzymeWrapper = mount(<ColorView />);

  return {
    enzymeWrapper
  };
}

describe("ColorView", () => {
  it("should render color view", () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.setState({
      colors: ["white", "black"]
    });
    console.log(enzymeWrapper.html());
    expect(enzymeWrapper.find("select option").length).toBe(3);
  });
});
