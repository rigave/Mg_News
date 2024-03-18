import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
