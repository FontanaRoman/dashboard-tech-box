import React from "react";

function Title(props) {
  return (
    <>
        <h3 className="Title"> {props.children} </h3>
    </>
  );
}

export default Title;
