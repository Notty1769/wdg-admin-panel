import React from "react";
import { Space, Table, Checkbox, Button, Input } from "antd";
import DummyAdminData from "../components/DummyAdminData";

const Admins = () => {
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
      title: "Permission",
      dataIndex: "permission",
      key: "permission",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <div>
      <Space>Admins</Space>

      <div>
        <Table columns={columns} dataSource={DummyAdminData} />
      </div>
      <Space>
        <div>
          <p>Name</p>
          <Input></Input>
        </div>
        <div>
          <p>Email</p>
          <Input></Input>
        </div>
        <div>
          <p>Permissions</p>
          <Space>
            <Checkbox>Users</Checkbox>
            <Checkbox>Places</Checkbox>
            <Checkbox>Enrolments</Checkbox>
            <Checkbox>Admins</Checkbox>
            <Checkbox>Metadata</Checkbox>
          </Space>
        </div>
        <Button>Add New Admin</Button>
      </Space>
    </div>
  );
};

export default Admins;
