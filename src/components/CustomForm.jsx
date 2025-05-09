import { useState } from "react";
import CustomInput from "./customInput";

export default function CustomForm({
  title,
  inputs,
  formData,
  setFormData,
  setSection,
  setShowForm,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveSection = (e, setSection) => {
    e.preventDefault();
    setSection((prev) => [...prev, formData]);
    setFormData({});
    setShowForm(false);
  };

  return (
    <>
      <form>
        {inputs.map((input) => (
          <div className="input-container" key={input.id}>
            <label htmlFor={input.id}>
              <span>{input.label}</span>{" "}
            </label>
            {input.id === "description" ? (
              <textarea
                placeholder={input.placeHolder}
                id={input.id}
                name={input.name}
                value={formData[input.name] || ""}
                onChange={handleChange}
                required
              ></textarea>
            ) : (
              <CustomInput
                type={input.type}
                placeholder={input.placeHolder}
                id={input.id}
                name={input.name}
                value={formData[input.name] || ""}
                onChange={handleChange}
              ></CustomInput>
            )}
          </div>
        ))}
        {title !== "Personal details" && (
          <button type="submit" onClick={(e) => saveSection(e, setSection)}>
            Enviar
          </button>
        )}
      </form>
    </>
  );
}
