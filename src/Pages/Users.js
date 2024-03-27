import React from "react";
import { Dropdown, Space, Table, Input } from "antd";
import DummyData from "../components/DummyData";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const Users = () => {
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Last Location",
      dataIndex: "lastlocation",
      key: "lastlocation",
    },
    {
      title: "Visits",
      dataIndex: "visits",
      key: "visits",
    },
    {
      title: "Followers",
      dataIndex: "followers",
      key: "followers",
    },
    {
      title: "Following",
      dataIndex: "following",
      key: "following",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
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
        <Space>
          <p>Users</p>
        </Space>

        <Space>
          <Dropdown.Button>Region</Dropdown.Button>

          <Dropdown.Button>Status</Dropdown.Button>

          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>
      <div>
        <Table columns={columns} dataSource={DummyData} />
      </div>
    </div>
  );
};

export default Users;
