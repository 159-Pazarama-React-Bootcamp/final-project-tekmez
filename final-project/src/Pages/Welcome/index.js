import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>Welcome Application Form</h1>
      <Link to="/CreateForm"> Create Form </Link>
    </div>
  );
}

export default Welcome;
