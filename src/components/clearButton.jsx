import React from "react";
import '../style_pages/clearButton.css';

const ClearButton = (props) => (
  <div className="clear__Button" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;
