import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <div>
        <h1>!Opps page not found</h1>
        <Link to="/">
          <button>Go to Home</button>
        </Link>
      </div>
    </div>
  );
}
