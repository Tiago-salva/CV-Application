import { useState } from "react";
import CustomInput from "./customInput";

export default function CustomForm({
  title,
  inputs,
  formData,
  setFormData,
  setSection,
  setShowForm,
  editingIndex,
  setEditingIndex,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e, setSection) => {
    e.preventDefault();
    editingIndex !== null
      ? setSection((prev) =>
          prev.map((section, i) => (i === editingIndex ? formData : section))
        )
      : setSection((prev) => [...prev, formData]);
    setFormData({});
    setShowForm(false);
  };

  const cancelForm = () => {
    setShowForm(false);
    setFormData({});
    setEditingIndex(null);
  };

  return (
    <>
      <form>
        {inputs.map((input) => (
          <div className="input-container" key={input.id}>
            <label htmlFor={input.id}>
              <span>{input.label}</span>
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
          <div className="buttons-container">
            <button className="cancel-btn" onClick={() => cancelForm()}>
              Cancel
            </button>
            <button
              className="submit-btn"
              type="submit"
              onClick={(e) => handleSubmit(e, setSection)}
            >
              Enviar
            </button>
          </div>
        )}
      </form>
    </>
  );
}
