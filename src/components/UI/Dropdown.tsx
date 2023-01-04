import React from "react";
import { Select } from "../../models/select";
import "./Dropdown.scss";

const Dropdown: React.FC<{
  style?: any;
  onChange?: (data: any) => void;
  placeholder: string;
  name: string;
  selected: string;
  value: Select[];
}> = (props) => {
  return (
    <select
      name={props.name}
      style={props.style}
      id={props.name}
      className="dropdown"
      onChange={props.onChange}
    >
      <option value="" disabled selected={!props.selected} hidden>
        {props.placeholder}
      </option>
      {props.value.map((item: Select) => (
        <option selected={props.selected === item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
