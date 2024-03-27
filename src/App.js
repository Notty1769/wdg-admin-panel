import React from "react";

import { Layout, Menu, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Enrolment from "./Pages/Enrolment";
import Admins from "./Pages/Admins";
import Places from "./Pages/Places";
import Metadata from "./Pages/Metadata";
import Profile from "./Pages/Profile";

const { Header, Content, Footer } = Layout;

// const items = [
//   { label: "Home", key: "/Pages/Home" },
//   { label: "Users", key: "/Pages/Users" },
//   { label: "Places", key: "/Pages/Places" },
//   { label: "Enrolment", key: "/Pages/Enrolment" },
//   { label: "Admins", key: "/Pages/Admins" },
//   { label: "Metadata", key: "/Pages/Metadata" },
//   {
//     label: "Profile",
//     key: "./Pages/Profile",
//     icon: <UserOutlined />,
//   },
// ];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            color: "white",
          }}
        >
          WTG Admin
        </p>
        <div className="demo-logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/Pages/Users">
            <Link to="/Users">Users</Link>
          </Menu.Item>
          <Menu.Item key="/Pages/Enrolment">
            <Link to="/Enrolment">Enrolment</Link>
          </Menu.Item>
          <Menu.Item key="/Pages/Admins">
            <Link to="/Admins">Admins</Link>
          </Menu.Item>
          <Menu.Item key="/Pages/Places">
            <Link to="/Places">Places</Link>
          </Menu.Item>
          <Menu.Item key="/Metadata">
            <Link to="/Metadata">Metadata</Link>
          </Menu.Item>
          <Menu.Item key="/Pages/Profile">
            <Link to="/Profile">
              <UserOutlined />
              Profile
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        ></div>
        {/* <BodyContent /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Enrolment" element={<Enrolment />} />
          <Route path="/Admins" element={<Admins />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Metadata" element={<Metadata />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
