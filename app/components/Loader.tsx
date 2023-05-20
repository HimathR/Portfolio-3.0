import React from "react";
import logo from "../../public/images/logo.svg";

const Loader = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Loader;
