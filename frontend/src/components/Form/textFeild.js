import React from "react";

function TextFeild({
  formdata,
  setFormdata,
  data,
  inputClass = "form-control",
}) {
  const { label, type, placeholder, key, required = false } = data;
  return (
    <>
      <label>
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClass}
        id={key}
        value={formdata[key]}
        required={required}
        onChange={(e) => {
          const { id, value } = e.target;
          setFormdata({ ...formdata, [id]: value });
        }}
      />
    </>
  );
}

export default TextFeild;
