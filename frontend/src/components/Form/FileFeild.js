import React from "react";

function FileFeild({
  formdata,
  setFormdata,
  data,
  inputClass = "form-control",
}) {
  const { label, key, required = false } = data;
  const onChange = (e) => {
    let input_val = e.target.files[0];
    setFormdata({ ...formdata, [key]: input_val });
  };
  return (
    <>
      <label>
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <div>
        <input
          required={required}
          type="file"
          className={inputClass}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default FileFeild;
