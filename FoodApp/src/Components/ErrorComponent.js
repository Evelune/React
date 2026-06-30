import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  return (
    <>
      <h1>{err.status}</h1>
      <h1>{err.statusText}</h1>
    </>
  );
};

export default ErrorComponent;
