import React, { Fragment } from "react";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundaryView";
import Header from "../components/Header/headerView";
import Footer from "../components/Footer/footerView";

export const withErrorBoundary = Component => {
  return <ErrorBoundary>{Component}</ErrorBoundary>;
};

export const WithHeaderAndFooter = props => (
  <Fragment>
    <Header />
    {props.children}
    <Footer />
  </Fragment>
);
