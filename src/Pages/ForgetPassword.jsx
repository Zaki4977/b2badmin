import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      message.success("Password reset link sent to your email!");
      setLoading(false);
      navigate("/login"); // Redirect back to login page
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 10 }}>
          Forgot Password?
        </Title>
        <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
          Enter your email address to reset your password.
        </Text>
        
        <Form name="forgotPassword" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email address!" },
            ]}
          >
            <Input 
              prefix={<MailOutlined style={{ color: "#1890ff" }} />} 
              placeholder="Email" 
              style={styles.input} 
            />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" loading={loading}>
              Send Reset Link
            </Button>
          </Form.Item>
          <Text 
            type="secondary" 
            style={{ display: "block", textAlign: "center", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Back to Login
          </Text>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  card: {
    width: 400,
    padding: 20,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  input: {
    border: "none",
    borderBottom: "2px solid #d9d9d9",
    borderRadius: 0,
    padding: "8px 0",
    boxShadow: "none",
  },
};

export default ForgetPassword;
