import React from "react";
import { SECONDS } from "../config";
import { InputProps } from "../interfaces";

function Input({ type, handleChange }: InputProps) {
  return (
    <>
      <label htmlFor={type} className="label">
        {type}
      </label>
      <input
        type="number"
        name={type}
        max={SECONDS.MAX}
        min={SECONDS.MIN}
        onChange={(e) => handleChange({ type, value: e.target.value })}
      />
    </>
  );
}

export default Input;
