import { Radio } from "antd";
import React, { useState } from "react";

function RadioFeild({ formdata, setFormdata, data, required = false }) {
  const { label, key, options } = data;

  const [val, setVal] = useState(1);
  const onChange = (e) => {
    let input_val = e.target.value;
    setVal(input_val);
    setFormdata({ ...formdata, [key]: input_val });
  };
  return (
    <>
      <label>{label}
        {required && <span className="text-danger">*</span>}
      </label>
      <div>
        <Radio.Group onChange={onChange} value={val}>
          {options?.map((opt, index) => {
            const { label, value } = opt;
            return <Radio key={index} value={value}>{label}</Radio>;
          })}
        </Radio.Group>
      </div>
    </>
  );
}

export default RadioFeild;
