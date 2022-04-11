import React from "react";

function TextAreaFeild({
  formdata,
  setFormdata,
  data,
  inputClass = "form-control",
}) {
  const { label, placeholder, key, required = false, rows } = data;
  return (
    <>
      <label>
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <textarea
        className={inputClass}
        onChange={(e) => {
          const { id, value } = e.target;
          setFormdata({ ...formdata, [id]: value });
        }}
        required={required}
        id={key}
        rows={rows}
        value={formdata[key]}
        placeholder={placeholder}
      />
    </>
  );
}

export default TextAreaFeild;
