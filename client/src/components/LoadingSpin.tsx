import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpin: React.FC = () => {
  return (
    <div className="d-flex mt-5 justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpin;
