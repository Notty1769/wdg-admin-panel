import React from "react";
import { Space, Table, DatePicker, Checkbox, Input } from "antd";
import DummyEnrolmentData from "../components/DummyEnrolrolmentData";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const Enrolment = () => {
  const columns = [
    {
      title: "Sl. No. ",
      dataIndex: "slNo",
      key: "slNo",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "row", // or 'column' for vertical alignment
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  };

  return (
    <div>
      <div style={containerStyle}>
        <Space>Business Enrolment</Space>

        <Space>
          <Checkbox>Dates</Checkbox>

          <DatePicker></DatePicker>

          <DatePicker></DatePicker>

          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>
      <div>
        <Table columns={columns} dataSource={DummyEnrolmentData} />
      </div>
    </div>
  );
};

export default Enrolment;
