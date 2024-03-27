// import React from "react";

// import { Breadcrumb, Layout, Menu, theme } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import { Route, Routes, useNavigate } from "react-router-dom";

// import Home from "./Home";
// import Users from "./Users";
// import Enrolment from "./Enrolment";
// import Admins from "./Admins";
// import Places from "./Places";
// import Metadata from "./Metadata";
// import Profile from "./Profile";

// const { Header, Content, Footer } = Layout;

// const CustomHeader = () => {
//   const navigate = useNavigate();

//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   return (
//     <Layout className="layout">
//       <Header
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-evenly",
//         }}
//       >
//         <p
//           style={{
//             fontSize: "20px",
//             color: "white",
//           }}
//         >
//           WTG Admin
//         </p>
//         <div className="demo-logo" />

//         <Menu
//           theme="dark"
//           mode="horizontal"
//           onClick={({ key }) => {
//             useNavigate(key);
//           }}
//           items={[
//             { label: "Home", key: "/Home" },
//             { label: "Users", key: "/Users" },
//             { label: "Places", key: "/Places" },
//             { label: "Enrolment", key: "/Enrolment" },
//             { label: "Admins", key: "/Admins" },
//             { label: "Metadata", key: "/Metadata" },
//             { label: "Profile", key: "/Profile", icon: <UserOutlined /> },
//           ]}
//         />
//       </Header>
//       <Content style={{ padding: "0 50px" }}>
//         <Breadcrumb style={{ margin: "16px 0" }}>
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <div
//           className="site-layout-content"
//           style={{ background: colorBgContainer }}
//         >
//           Content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: "center" }}>
//         Ant Design ©2023 Created by Ant UED
//       </Footer>
//     </Layout>
//   );
// };

// function content() {
//   return (
//     <Routes>
//       <Route path="/Home">
//         <Home />
//       </Route>
//       <Route path="/Users">
//         <Users />
//       </Route>
//       <Route path="/Places">
//         <Places />
//       </Route>
//       <Route path="/Enrolment">
//         <Enrolment />
//       </Route>
//       <Route path="/Admins">
//         <Admins />
//       </Route>
//       <Route path="/MetaData">
//         <Metadata />
//       </Route>
//       <Route path="/Profile">
//         <Profile />
//       </Route>
//     </Routes>
//   );
// }

// export default CustomHeader;

import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];
const CustomHeader = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default CustomHeader;
