import CustomInput from "./customInput";

export default function CustomForm({ title, inputs, formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>{title}</h2>
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
              ></textarea>
            ) : (
              <CustomInput
                type={input.type}
                placeholder={input.placeHolder}
                id={input.id}
                name={input.id}
                value={formData[input.id] || ""}
                onChange={handleChange}
              ></CustomInput>
            )}
          </div>
        ))}
      </form>
    </>
  );
}
