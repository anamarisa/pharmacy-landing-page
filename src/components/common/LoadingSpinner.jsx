import React from "react";
import { CircleLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <CircleLoader color="#9A3242" size={50} />
    </div>
  );
};

export default LoadingSpinner;
