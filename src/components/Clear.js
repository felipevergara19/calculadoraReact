import React from "react";
import '../stylesheet/Clear.css'

const Clear = (props) => (
  <div className="button-clear">
    {props.children}
  </div>
);

export default Clear;