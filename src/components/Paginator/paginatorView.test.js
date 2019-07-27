import React from "react";
import { mount } from "enzyme";
import PaginatorView from "./paginatorView";

function setup() {
  const props = {
    currentPage: 1,
    totalPages: 5
  };
  const enzymeWrapper = mount(<PaginatorView {...props} />);

  return {
    enzymeWrapper,
    props
  };
}

describe("PaginatorView", () => {
  it("should render unordered list which has all links", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("ul").length).toBe(1);
  });
});
