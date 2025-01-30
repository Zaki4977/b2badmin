import React, { useState } from "react";
import { Button, Table, Modal, Switch, Form, Input, message } from "antd";
import { EditOutlined, DeleteOutlined ,PlusOutlined} from "@ant-design/icons";

const SubClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // Form instance for managing form state
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const [data, setData] = useState([
    {
      key: "1",
      name: "Ace Chemist Direct",
      clientowner: "Mazahar Hussain",
      status: "Active",
    },
    {
      key: "2",
      name: "CPSU",
      clientowner: "Katie Burns",
      status: "InActive",
    },
    {
      key: "3",
      name: "The Medicine Chest",
      clientowner: "Abid Khan",
      status: "Active",
    },
    {
      key: "4",
      name: "greenlight",
      clientowner: "Seama Kaur",
      status: "InActive",
    },
  ]);

   
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Manager",
      dataIndex: "clientowner",
    },
    {
        title: "Client",
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
          <a onClick={() => showEditModal(record)} style={{ color: "#1890ff" }}>
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
  const showModal = () => {
    setIsEditMode(false);
    setSelectedClient(null); // Reset form data for new client
    setIsModalOpen(true);
  };

  const showEditModal = (client) => {
    setIsEditMode(true);
    setSelectedClient(client); // Set selected client for editing
    form.setFieldsValue(client); // Populate form fields with existing data
    setIsModalOpen(true);
  };
  const handleToggle = (record, checked) => {
    const newData = data.map((item) =>
      item.key === record.key ? { ...item, status: checked ? "Active" : "InActive" } : item
    );
    setData(newData);
    message.success(`Status updated to ${checked ? "Active" : "InActive"}`);
  };


  const handleEdit = (record) => {
    Modal.info({
      title: "Edit Record",
      content: `Edit details for ${record.name}`,
    });
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
        <h2 style={{ textAlign: "left" }}>SUBCLIENT MANAGEMENT</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Button type='primary' onClick={showModal}>
          Add New Sub Client <PlusOutlined />
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <div>
      <Modal
        title={isEditMode ? "Edit Sub Client" : "Create New Sub Client"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          form={form}
          layout="vertical"
          name="createOrEditSubClientForm"
          onFinish={handleOk}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter the name!" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            label="Manager"
            name="clientowner"
            rules={[{ required: true, message: "Please enter the manager's name!" }]}
          >
            <Input placeholder="Enter manager's name" />
          </Form.Item>
          {/* <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select the status!" }]}
          >
            <Input placeholder="Enter status" />
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isEditMode ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      </div>
    </div>
  );
};

export default SubClient;
