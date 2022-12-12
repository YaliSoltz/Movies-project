import React from "react";
import Catagories from "./sider/catagories";

const Sider = (props) => {
  return (
    <React.Fragment>
      <Catagories {...props} />
    </React.Fragment>
  );
};

export default Sider;
