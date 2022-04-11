import React, { useState } from "react";
import { sendRequest } from "../../services";
import { apipaths } from "../../services/apiPaths";
import FormContainer from "../Form";

function IncomeForm({ title, setScreen, selectedIncome }) {
  const [formLayout] = useState([
    {
      id: 1,
      label: "Description",
      type: "textarea",
      placeholder: "Enter description",
      key: "description",
      containerClass: "col-6",
      required: true,
    },
    {
      id: 2,
      label: "Summary",
      type: "textarea",
      placeholder: "Enter Summary",
      key: "summary",
      containerClass: "col-6",
      required: true,
    },
    {
      id: 3,
      label: "Enter Date",
      type: "date",
      key: "date",
      containerClass: "col-6",
      required: true,
    },
    {
      id: 4,
      label: "Type",
      type: "select",
      key: "type",
      placeholder: "Select Type",
      options: [
        {
          label: "Income",
          value: "income",
        },
        {
          label: "Expense",
          value: "expense",
        },
      ],
      containerClass: "col-6",
      required: true,
    },
    {
      id: 5,
      label: "Amount",
      type: "number",
      placeholder: "Enter Amount",
      key: "amount",
      containerClass: "col-6",
      required: true,
    },
  ]);

  const formDataHandler = async (formdata) => {
    const {date} = formdata;
    if(!date) alert(`Date is required.`)
    const { data, success } = await sendRequest(
      selectedIncome._id ? apipaths.update : apipaths.add,
      formdata
    );
    if (success) setScreen("list");
  };

  return (
    <div className=" w-75 mx-auto pt-5">
      <h4 className="px-2">{title} Income/Expense</h4>
      <FormContainer
        onSubmit={formDataHandler}
        onCancel={() => setScreen("list")}
        layout={formLayout}
        defaultData={selectedIncome}
        submitBtnTitle={selectedIncome._id ? "Update" : "Create"}
      />
    </div>
  );
}

export default IncomeForm;
