import React from "react";
import { Space, Dropdown, Button, Table } from "antd";
import DummyPlacesData from "../components/DummyPlacesData";

const Home = () => {
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Photos",
      dataIndex: "photos",
      key: "photos",
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

  const smallContainer = {
    height: "100px",
    width: "300px",
    backgroundColor: "yellow",
  };

  const largeContainer = {
    height: "100px",
    width: "600px",
    backgroundColor: "yellow",
    marginTop: "20px",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Space>Welcome, User</Space>
        <Space>
          <p>Region:</p>
          <Dropdown.Button>All</Dropdown.Button>
        </Space>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div style={smallContainer}></div>
        <div style={smallContainer}></div>
        <div style={smallContainer}></div>
        <div style={smallContainer}></div>
        <div style={largeContainer}></div>
        <div style={largeContainer}></div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Trending </p>

          <div style={{ display: "flex" }}>
            <div>DataSince: </div>
            <Button type="link" block>
              Today
            </Button>
            <Button type="link" block>
              7 Days
            </Button>
            <Button type="link" block>
              14 Days
            </Button>
            <Button type="link" block>
              30 Days
            </Button>
            <Button type="link" block>
              60 Days
            </Button>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={DummyPlacesData}
            pagination={false}
            scroll={{ y: 240 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
