import React from "react";
import FavoriteCar from "../favoriteCarView";
import renderer from "react-test-renderer";

describe("Favorite car component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<FavoriteCar stockNumber={1234} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
