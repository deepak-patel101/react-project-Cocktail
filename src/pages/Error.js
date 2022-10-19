import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h2>oppd! no such page exist </h2>
        <Link to="/home" className="btn btn-primary">
          go back
        </Link>
      </div>
    </section>
  );
};

export default Error;
