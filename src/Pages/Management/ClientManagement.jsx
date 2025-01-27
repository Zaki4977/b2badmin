import React, { useState } from "react";
import { Button, Table, Modal, Switch, Form, Input, message } from "antd";
import { EditOutlined, DeleteOutlined ,PlusOutlined} from "@ant-design/icons";

const ClientManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // Form instance for managing form state
  const [editRecord, setEditRecord] = useState(null); // State for the record being edited
  const [data, setData] = useState([
    {
      key: "1",
      name: "Webdezign Com",
      clientowner: "John Brown",
      status: "Active",
      action: 70,
    },
    {
      key: "2",
      name: "Carter Chemist (2005) Ltd",
      clientowner: "Jim Green",
      status: "Inactive",
      action: 89,
    },
    {
      key: "3",
      name: "Anand Bhatt Customers",
      clientowner: "Joe Black",
      status: "Active",
      action: 70,
    },
    {
      key: "4",
      name: "Forte Direct Ltd",
      clientowner: "Jim Red",
      status: "Inactive",
      action: 89,
    },
  ]);

  const showModal = () => {
    setIsModalOpen(true);
    setEditRecord(null); // Reset the record if it's "Add New Client"
    form.resetFields(); // Clear the form fields
  };
  const handleOk = () => {
    setIsModalOpen(false);
    form.resetFields(); // Clear form when modal closes
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields(); // Clear form when modal cancels
  };

  const columns = [
    {
      title: "Client Name",
      dataIndex: "name",
    },
    {
      title: "Client Owner",
      dataIndex: "clientowner",
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
   
  const handleToggle = (key, checked) => {
    const newData = data.map((item) =>
      item.key === key ? { ...item, status: checked ? "Active" : "Inactive" } : item
    );
    setData(newData);  // Update the data state
    message.success(`Client status updated to ${checked ? "Active" : "Inactive"}`);
  };

  const handleEdit = (record) => {
    setIsModalOpen(true); // Open the modal for editing
    setEditRecord(record); // Set the current record to be edited
    form.setFieldsValue({
      name: record.name,
      email: record.clientowner,
      role: record.status,
    }); // Set form values to the record's values
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
  const onFinish = (values) => {
    console.log("Form Values: ", values);
    message.success("Form submitted");
    setIsModalOpen(false);
    form.resetFields();
  };
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "left" }}>CLIENT MANAGEMENT</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Button type='primary' onClick={showModal}>
          Add New Client <PlusOutlined />
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <div>
      <Modal title={editRecord ? "Edit Client" : "Create New Client"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
        <Form form={form} layout="vertical" name="createClientForm" onFinish={onFinish}>
          <Form.Item
            label="Client Name"
            name="name"
            rules={[{ required: true, message: "Please enter the client name!" }]}
          >
            <Input placeholder="Enter client name" />
          </Form.Item>

          <Form.Item
            label="Client Owner"
            name="email"
            rules={[{ required: true, message: "Please enter the client owner!" }]}
          >
            <Input placeholder="Enter client owner" />
          </Form.Item>

          <Form.Item
            label="Status"
            name="role"
            rules={[{ required: true, message: "Please select a client status!" }]}
          >
            <Input placeholder="Enter client status (Active/Inactive)" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editRecord ? "Update Client" : "Add Client"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      </div>
    </div>
  );
};

export default ClientManagement;
