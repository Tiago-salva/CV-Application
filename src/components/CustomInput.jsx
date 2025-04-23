import { useState } from "react";

export default function CustomInput({ type, placeHolder, id }) {
  const [value, setValue] = useState("");

  return (
    <input
      type={type}
      placeholder={placeHolder}
      id={id}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    ></input>
  );
}
