import React from "react";
import CarDetailsPage from "../CarDetailsPage/carDetailsPageView";
import PageNouFoundPage from "../NotFoundPage/notFoundPageView";
import renderer from "react-test-renderer";

let match = {
  params: {
    stockNumber: 1234
  }
};

describe("CarDetailsPage component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<CarDetailsPage match={match} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("PageNouFoundPage component", () => {
  it("shallow renders without crashing", () => {
    const tree = renderer.create(<PageNouFoundPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
