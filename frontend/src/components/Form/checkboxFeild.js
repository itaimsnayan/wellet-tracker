import React from "react";
import { Checkbox } from "antd";

function CheckboxFeild({ formdata, setFormdata, data, required = false }) {
  const { label, key, options } = data;

  return (
    <>
      <label className="d-block">{label}
        {required && <span className="text-danger">*</span>}
      </label>
      <Checkbox.Group
        options={options}
        onChange={(val) => setFormdata({ ...formdata, [key]: val })}
      />
    </>
  );
}

export default CheckboxFeild;
