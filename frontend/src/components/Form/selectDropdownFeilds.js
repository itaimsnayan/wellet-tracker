import React from "react";
import { Select } from "antd";

function SelectDropdownFeild({
  formdata,
  setFormdata,
  data,
  inputClass = "form-select",
}) {
  const { label, placeholder, key, options, required = false } = data;
  const { Option } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  return (
    <>
      <label>
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder={placeholder ? placeholder : "Please select"}
        defaultValue={[]}
        className={inputClass ? inputClass : ""}
        onChange={(e) => setFormdata({ ...formdata, [key]: e })}
      >
        {/* {children} */}

        {options?.map((opt) => {
          const { label, value } = opt;
          return <Option key={value}>{label}</Option>;
        })}
      </Select>
    </>
  );
}

export default SelectDropdownFeild;
