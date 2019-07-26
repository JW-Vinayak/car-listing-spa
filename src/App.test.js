import React from "react";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<App />);

  return {
    enzymeWrapper
  };
}

it("renders without crashing", () => {
  const { enzymeWrapper } = setup();
  expect(enzymeWrapper.find("div").hasClass("App")).toBe(true);
});
