import React from "react";
import NavBar from "./header/navBar";

const Header = (props) => {
  return (
    <React.Fragment>
      <NavBar {...props} />
    </React.Fragment>
  );
};
export default Header;
