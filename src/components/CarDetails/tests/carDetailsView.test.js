import React from "react";
import CarDetails from "../carDetailsView";
import renderer from "react-test-renderer";

let match = {
  params: {
    stockNumber: 1234
  }
};

describe("Car details component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<CarDetails match={match} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
