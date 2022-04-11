import React, { useEffect } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { getTodaysDate } from "../../services/commonServices";

function DateFeild({ formdata, setFormdata, data }) {
  const { label, required = false, key, defaultValue = getTodaysDate() } = data;
  console.log(required);

  useEffect(() => {
    setFormdata({ ...formdata, [key]: getTodaysDate().replaceAll("/", "-") });
  }, []);
  return (
    <div>
      <label className="d-block">
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <DatePicker
        defaultValue={moment(defaultValue, "YYYY/MM/DD")}
        className="w-100"
        onChange={(date, dateString) =>
          setFormdata({ ...formdata, [key]: dateString })
        }
      />
    </div>
  );
}

export default DateFeild;
