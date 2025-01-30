import React, { useState } from "react";
import { Card, Avatar, Typography, Button, Form, Input, Row, Col, Divider } from "antd";
import { EditOutlined, UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  // User Data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+971 50 123 4567",
    role: "Admin",
    address: "Downtown, Dubai, UAE",
  });

  // Enable Edit Mode
  const handleEdit = () => {
    setIsEditing(true);
    form.setFieldsValue(user);
  };

  // Save Changes
  const handleSave = (values) => {
    setUser(values);
    setIsEditing(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f4f4f4", padding: "20px" }}>
      <Card
        style={{
          maxWidth: 600,
          width: "100%",
          padding: "20px",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
          background: "#fff",
        }}
      >
        {/* Profile Header */}
        <Avatar 
          size={100} 
          icon={<UserOutlined />} 
          style={{
            backgroundColor: "#1890ff",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
        <Title level={3} style={{ marginTop: 10, color: "#333" }}>{user.name}</Title>
        <Text type="secondary" style={{ fontSize: "14px", color: "#666" }}>{user.role}</Text>

        <Divider />

        {/* User Details */}
        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
          <Col span={24}>
            <Text strong><MailOutlined style={{ color: "#1890ff" }} /> Email:</Text>
            <Text style={{ marginLeft: 10, color: "#555" }}>{user.email}</Text>
          </Col>
          <Col span={24}>
            <Text strong><PhoneOutlined style={{ color: "#1890ff" }} /> Phone:</Text>
            <Text style={{ marginLeft: 10, color: "#555" }}>{user.phone}</Text>
          </Col>
          <Col span={24}>
            <Text strong><HomeOutlined style={{ color: "#1890ff" }} /> Address:</Text>
            <Text style={{ marginLeft: 10, color: "#555" }}>{user.address}</Text>
          </Col>
        </Row>

        {/* Edit & Save Button */}
        {isEditing ? (
          <Form form={form} layout="vertical" onFinish={handleSave} style={{ marginTop: 20 }}>
            <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ type: "email", message: "Please enter a valid email" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address">
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" icon={<CheckOutlined />} style={{ width: "100%" }}>
              Save
            </Button>
            <Button 
              style={{ marginTop: 10, width: "100%", background: "#f5222d", color: "#fff" }} 
              icon={<CloseOutlined />} 
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </Form>
        ) : (
          <Button 
            type="primary" 
            icon={<EditOutlined />} 
            style={{ marginTop: 20, width: "100%", background: "#1890ff" }} 
            onClick={handleEdit}
          >
            Edit Profile
          </Button>
        )}
      </Card>
    </div>
  );
};

export default MyProfile;
