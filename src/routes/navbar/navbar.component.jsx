import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <h1>Navbar</h1>
      <Outlet />
    </React.Fragment>
  );
}

export default Navbar;
