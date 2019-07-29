import * as actions from "../paginatorActions";


describe("filter actions", () => {
  it("should create an action to set page number", () => {
    const expectedAction = {
      type: actions.SET_CURRENT_PAGE,
      payload: {
        pageNumber: 1
      }
    };
    expect(actions.setCurrentPage(1)).toEqual(expectedAction);
  });
});

