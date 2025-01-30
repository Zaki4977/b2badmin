import React, { useState } from "react";
import { Button, Table, Modal, Switch, Form, Input, message,Select } from "antd";
import { EditOutlined, DeleteOutlined ,PlusOutlined} from "@ant-design/icons";

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // Form instance for managing form state
  const [formMode, setFormMode] = useState("add"); // "add", "edit", or "view"
  const [currentRecord, setCurrentRecord] = useState(null); // Record to edit or view

  const showModal = (mode, record = null) => {
    setFormMode(mode);
    setCurrentRecord(record);
    if (mode === "edit" && record) {
      form.setFieldsValue(record); // Pre-fill form with record's data
    } else if (mode === "add") {
      form.resetFields(); // Reset form for add mode
    }
    setIsModalOpen(true);  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
      title: "Contact Number",
      dataIndex: "number",
    },
    {
      title: "Role",
      dataIndex: "role",
       
    },
    {
      title: "Registered On",
      dataIndex: "register_on",
    },
    {
      title: "Status",
      dataIndex: "status",

      render: (value, record) => (
        <Switch
          checked={record.status === "active"} // Example toggle condition
          onChange={(checked) => handleToggle(record, checked)} // Handle toggle logic
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",

      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <a onClick={() => handleEdit(record)} style={{ color: "#1890ff" }}>
            <EditOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
          </a>
          <a onClick={() => handleDelete(record)} style={{ color: "red" }}>
            <DeleteOutlined style={{ fontSize: "18px" }} /> {/* Delete icon */}
          </a>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      role: "User",
      action: 70,
      email:"john@genImagePreviewStyle.com",
      number:98989898998,
      register_on:"01/01/2024",

    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      role: "User",
      action: 89,
      email:"jim@genImagePreviewStyle.com",
      number:89898989898,
      register_on:"01/04/2024",
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      role: "User",
      action: 70,
      email:"joeblack@genImagePreviewStyle.com",
      number:98989898998,
      register_on:"01/06/2024",
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      role: "User",
      action: 89,
      email:"gimred@genImagePreviewStyle.com",
      number:2345678913,
      register_on:"01/01/2024",
    },
  ];
  const handleToggle = (record, checked) => {
    console.log("Toggle changed:", { id: record.key, status: checked });
    // Example: Send an API request to update the status
  };

  const handleEdit = (record) => {
    form.setFieldsValue({
      name: record.name,
      email: record.email || "", // Assuming email is a part of the data
      number: record.number || "",
       role:record.role,
       register_on:record.register_on
     });
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
        <h2 style={{ textAlign: "left" }}>USER MANAGEMENT</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Button type='primary' onClick={showModal}>
          Add New User <PlusOutlined />
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <div>
        <Modal title={formMode === "add" ? "Add User" :   "Edit User"  }  open={isModalOpen}
        onOk={formMode !== "view" ? form.submit : handleOk}
        onCancel={handleCancel}
        footer={false}
         >
          <Form form={form} layout='vertical' name='createUserForm' onFinish={onFinish}>
            <Form.Item label='Name' name='name' rules={[{ required: true, message: "Please enter the user name!" }]}>
              <Input placeholder='Enter name' />
            </Form.Item>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                { required: true, message: "Please enter the email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder='Enter email' />
            </Form.Item>
            <Form.Item label='Contact Number' name='number' rules={[{ required: true, message: "Please enter the role!" }]}>
              <Input placeholder='Enter Contact Number' />
            </Form.Item>
            <Form.Item label='Role' name='role' rules={[{ required: true, message: "Please enter the role!" }]}>
            <Select
      defaultValue="User"
      style={{
        width: "100%",
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Manager',
          label: 'Manager',
        },
        {
          value: 'client',
          label: 'Client',
        },
        {
          value: 'user',
          label: 'User',
        },
         
      ]}
    />
             </Form.Item>
            <Form.Item label='Registred On' name='register_on' rules={[{ required: true, message: "Please enter the role!" }]}>
              <Input placeholder='Enter role' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default UserList;
