import React from "react";
import '../style_pages/button.css';

function Buttons (props){

  const operator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }

  return (
    <div
      className={`button__container ${operator(props.children) ? 'operator__container' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Buttons;
