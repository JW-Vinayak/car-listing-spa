import React from "react";
import PageNotFoundView from "../../PageNotFound/pageNotFoundView";
import { WithHeaderAndFooter } from "../../../utils/composition";

const PageNotFound = () => {
  return (
    <WithHeaderAndFooter>
      <PageNotFoundView />
    </WithHeaderAndFooter>
  );
};

export default PageNotFound;
