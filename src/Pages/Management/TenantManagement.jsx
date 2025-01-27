import React, { useState } from "react";
import { Button, Table, Modal, Switch, Form, Input, message } from "antd";
import { EditOutlined, DeleteOutlined ,PlusOutlined} from "@ant-design/icons";

const TenantManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // Form instance for managing form state
  const [selectedRecord, setSelectedRecord] = useState(null); // Used to differentiate Add/Edit
  const [isEditing, setIsEditing] = useState(false); // To differentiate between Add and Edit
  const [editingRecord, setEditingRecord] = useState(null); // Store the record being edited

  const [data, setData] = useState([
    {
      key: "1",
      name: "Drivegrp",
      email: "john@genImagePreviewStyle.com",
      phone: "1234567899",
      address: "London, UK",
      subscriptions: "All Products",
      status: "Active",
    },
    {
      key: "2",
      name: "RHGROUP",
      email: "john@genImagePreviewStyle.com",
      phone: "1234567899",
      address: "London, UK",
      subscriptions: "Selected Products",
      status: "Active",
    },
    {
      key: "3",
      name: "SIGDRIVE",
      clientowner: "John Brown",
      email:"john@genImagePreviewStyle.com",
      phone:1234567899,
      address:"London,UK",
      subscriptions:"All Products",
      status: "Active",
      action: 70,
    },
    {
      key: "4",
      name: "SECROBOT",
      clientowner: "John Brown",
      email:"john@genImagePreviewStyle.com",
      phone:1234567899,
      address:"London,UK",
      subscriptions:"All Products",
      status: "Active",
      action: 70,
    },
  ]);


  const showModal = (record = null) => {
    setSelectedRecord(record);
    if (record) {
      // Set initial form values for edit
      form.setFieldsValue(record);
    } else {
      // Reset form for add
      form.resetFields();
    }
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
    form.resetFields();
  };

  const handleToggle = (record, checked) => {
    const newData = data.map((item) =>
      item.key === record.key ? { ...item, status: checked ? "Active" : "Inactive" } : item
    );
    setData(newData);
    message.success(`Status updated for ${record.name}`);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Subscriptions",
      dataIndex: "subscriptions",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <a onClick={() => handleEdit(record)} style={{ color: "#1890ff" }}>
            <EditOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
          </a>
          
        </div>
      ),
       
    },
    
    {
      title: "Action",
      dataIndex: "action",

      render: (value, record) => (
        <Switch
          checked={record.status === "active"} // Example toggle condition
          onChange={(checked) => handleToggle(record, checked)} // Handle toggle logic
        />
      ),
    },
     
  ];
   
  

  const handleEdit = (record) => {
    setIsEditing(true);
    setEditingRecord(record); // Store the record being edited
    form.setFieldsValue(record); // Populate form with record data
    setIsModalOpen(true);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: "Are you sure?",
      content: `This will delete the record of ${record.name}`,
      onOk: () => {
        // message.success(`Deleted ${record.name}`);
        // Add logic to remove the item from the dataSource.
      },
    });
  };

  const onChange = () => {


  };
  const onFinish = () => {
    alert("submit");
  };
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "left" }}>TENANT MANAGEMENT</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Button type='primary' onClick={showModal}>
          Add New Tenant <PlusOutlined />
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <div>
      <Modal
        title={selectedRecord ? "Edit Tenant" : "Add New Tenant"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" name="tenantForm" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter the tenant name!" }]}
          >
            <Input placeholder="Enter tenant name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter the email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter tenant email" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please enter the phone number!" }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter the address!" }]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>
          <Form.Item
            label="Subscriptions"
            name="subscriptions"
            rules={[{ required: true, message: "Please enter subscription details!" }]}
          >
            <Input placeholder="Enter subscription details" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {selectedRecord ? "Update Tenant" : "Add Tenant"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      </div>
    </div>
  );
};

export default TenantManagement;
