import React from "react";
import "../stylesheets/Selectable.css";
const Selectable = ({
  options,
  groupName,
  onChange
}: {
  options: string[];
  groupName: string;
  onChange: (val: string) => void;
}) => {
  return (
    <ul className="select-btn-div">
      {options.map((itm: string) => (
        <li key={itm}>
          <label className={"select-btns"} htmlFor={itm} role="button">
            <input
              type="radio"
              id={itm}
              name={groupName}
              value={itm}
              onChange={e => onChange(e.target.value)}
            />

            {itm}
          </label>
        </li>
      ))}
    </ul>
  );
};
export default Selectable;
