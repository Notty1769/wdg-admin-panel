import React from "react";
import { Dropdown, Space, Table, Input } from "antd";
import DummyPlacesData from "../components/DummyPlacesData";

const Places = () => {
  const columns = [
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
      title: "City",
      dataIndex: "city",
      key: "city",
    },

    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Visits",
      dataIndex: "visit",
      key: "visit",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
  ];

  return (
    <div>
      <Space size={500}>
        <p>Places</p>
        <div>
          <Space>
            <p>Region:</p>
            <Dropdown.Button>Region</Dropdown.Button>
            <p>Type:</p>
            <Dropdown.Button>Type</Dropdown.Button>
            <p>Rating:</p>
            <Dropdown.Button>Rating</Dropdown.Button>
            <p>Search:</p>
            <Input></Input>
          </Space>
        </div>
      </Space>
      <div>
        <Table columns={columns} dataSource={DummyPlacesData} />
      </div>
    </div>
  );
};

export default Places;
