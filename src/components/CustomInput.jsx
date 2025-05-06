import { useState } from "react";

export default function CustomInput({
  type,
  placeHolder,
  id,
  name,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required
    ></input>
  );
}
