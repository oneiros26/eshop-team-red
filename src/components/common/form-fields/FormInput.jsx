import React, { useState } from "react";
import "./contactForm.css";

function FormInput(props) {
  const { label, errorMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col w-full">
      <label className="text-md text-slate-800 font-medium mb-1">{label}</label>
      <input
        className="input w-full rounded-lg p-2.5 text-slate-800 bg-gray-50 border border-gray-300 focus:border-blue-500 text-sm outline-0 transition-all"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      ></input>
      <p className="hidden text-red-700 text-xs">{errorMessage}</p>
    </div>
  );
}

export default FormInput;
