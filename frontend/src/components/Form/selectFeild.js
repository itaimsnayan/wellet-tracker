import React from "react";

function SelectFeild({ formdata, setFormdata, data, inputClass = "form-select" }) {
  const { label, placeholder, key, options, required = false } = data;
  return (
    <>
      <label>{label}
        {required && <span className="text-danger">*</span>}
      </label>
      <select
        className={inputClass}
        id={key}
        required={required}
        defaultValue={formdata[key]}
        onChange={(e) => setFormdata({ ...formdata, [key]: e.target.value })}
      >
        <option value="">{placeholder}</option>
        {options?.map((opt, index) => {
          const { label, value } = opt;
          return (
            <option key={index} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default SelectFeild;
