import CustomInput from "./customInput";

export default function CustomForm({ inputs }) {
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
                placeHolder={input.placeHolder}
                id={input.id}
              ></textarea>
            ) : (
              <CustomInput
                type={input.type}
                placeHolder={input.placeHolder}
                id={input.id}
              ></CustomInput>
            )}
          </div>
        ))}
      </form>
    </>
  );
}
