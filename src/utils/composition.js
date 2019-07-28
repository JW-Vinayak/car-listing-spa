import React from "react";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundaryView";

export const withErrorBoundary = Component => {
  return <ErrorBoundary>{Component}</ErrorBoundary>
}
