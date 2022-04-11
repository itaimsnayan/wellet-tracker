import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { sendRequest } from "../../services";
import { apipaths } from "../../services/apiPaths";

function IncomeList({ setScreen, setSelectedIncome }) {
  const [incomeList, setIncomeList] = useState([]);
  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Summary",
      dataIndex: "summary",
      key: "summary",
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (data, row) => {
        return (
          <>
            <Button
              type="ghost"
              className="btn-warning me-3"
              onClick={() => editHandler(row)}
            >
              Edit
            </Button>
            <Button
              type="primary"
              className="btn-danger"
              onClick={() => deleteHandler(row)}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await sendRequest(apipaths.incomeList);
    setIncomeList(data);
    setSelectedIncome({});
  };

  const editHandler = (data) => {
    setSelectedIncome(data);
  };

  const deleteHandler = async ({ _id }) => {
    let confirmation = window.confirm("Are you sure ?");
    if (confirmation) {
      const path = { ...apipaths.delete };
      path.url = path.url + _id;
      const { success } = await sendRequest(path);
      if (success) getData();
    }
  };

  return (
    <div className="mt-5 pt-3 w-75 mx-auto">
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0 me-3">Income/Expense List</h5>
        <Button onClick={() => setScreen("form")} type="primary" shape="round">
          Add Income/Expense
        </Button>
      </div>

      <Table columns={columns} dataSource={incomeList} />
    </div>
  );
}

export default IncomeList;
