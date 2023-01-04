import React from "react";
import "./Dropdown.scss";

const Dropdown: React.FC<{
  style: any;
  placeholder: string;
  name: string;
  value: string[];
}> = (props) => {
  return (
    <select
      name={props.name}
      style={props.style}
      id={props.name}
      className="dropdown"
    >
      <option value="" disabled selected hidden>
        {props.placeholder}
      </option>
      {props.value.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
};

export default Dropdown;
