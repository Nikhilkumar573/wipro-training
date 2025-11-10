import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const withLoading = (Component) => ({ loading, ...props }) => {
  if (loading) return <LoadingSpinner />;
  return <Component {...props} />;
};

export default withLoading;
