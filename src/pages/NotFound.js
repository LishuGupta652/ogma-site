import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <div>
      <Header />
      <h1>404</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
