import React from "react";
import "./style.css";

function Full(props) {
  return (
    <div
      className="full"
      // style={{ background: `url(${props.backgroundImage}) no-repeat center center fixed` }}
    >
      {props.children}
    </div>
  );
}

export default Full;
