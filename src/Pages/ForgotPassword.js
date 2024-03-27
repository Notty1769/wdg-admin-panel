import React from "react";
import { Button, Form, Input, Space } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ContainerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const ParaStyle = {
  padding: "30px 10px",
  fontSize: "20px",
};

const ForgotPassword = () => (
  <div style={ContainerStyle}>
    <p style={ParaStyle}>Forgot Password</p>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 7,
          span: 16,
        }}
      >
        <Space>
          <Button type="link" htmlType="submit">
            back to login
          </Button>

          <Button type="primary" htmlType="submit">
            Get new Password
          </Button>
        </Space>
      </Form.Item>
    </Form>
  </div>
);
export default ForgotPassword;
