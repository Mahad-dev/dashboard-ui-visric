import React, { useState } from "react";
import { Checked, UnChecked } from "../icons/Icons";

function CheckBox({ id, label, className, onChange, checked, ...props }) {
  const [check, setChecked] = useState(checked || false);

  const handleCheckboxChange = (event) => {
    setChecked(!check);
    // Call the user-provided onChange handler, if available
    if (onChange) {
      onChange(event.target.check);
    }
  };

  return (
    <label
      className={`flex items-center gap-[11px] select-none cursor-pointer ${className}`}
      htmlFor={id}
    >
      {check ? <Checked /> : <UnChecked />}
      {label}
      <input
        id={id}
        hidden
        onChange={handleCheckboxChange}
        type="checkbox"
        {...props} // Spread the rest of the props to the input element
      />
    </label>
  );
}

export default CheckBox;
