import React from "react";
import { Spinner } from "reactstrap";

const LoadingSpinner = props => {
  return (
    <div>
      <Spinner style={{ width: "10rem", height: "10rem" }} />
    </div>
  );
};

export default LoadingSpinner;
