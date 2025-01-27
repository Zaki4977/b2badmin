import React, { useState } from "react";
import { Button, Table, Modal, Switch, Form, Input, message } from "antd";
import { EditOutlined, DownloadOutlined ,PlusOutlined } from "@ant-design/icons";

const ContractManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // Form instance for managing form state
  const [currentContract, setCurrentContract] = useState(null); // State for editing contract

  const showModal = () => {
    setCurrentContract(null); // Clear currentContract for create mode
    form.resetFields(); // Reset form fields
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form.submit();
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Contract Code",
      dataIndex: "action",
    },
    {
      title: "Contract Name",
      dataIndex: "contractname",
    },
    {
        title: "Description",
        dataIndex: "description",
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
  const data = [
    {
      key: "1",
      contractname: "	Drivegrp",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat!",
      status: "Active",
      action: 70,
    },
    {
      key: "2",
      contractname:"RHGROUP" ,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat!",
      status: "Active",
      action: 89,
    },
    {
      key: "3",
      contractname: "SIGDRIVE",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat!",
      status: "InActive",
      action: 70,
    },
    {
      key: "4",
      contractname: "SECROBOT",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat!",
      status: "InActive",
      action: 89,
    },
  ];
  const handleToggle = (record, checked) => {
    console.log("Toggle changed:", { id: record.key, status: checked });
    // Example: Send an API request to update the status
  };

  const handleEdit = (record) => {
    setCurrentContract(record);
    form.setFieldsValue(record); 
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
        <h2 style={{ textAlign: "left" }}>CONTRACT MANAGEMENT</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
      <span style={{paddingRight:'15px'}}><DownloadOutlined style={{fontSize:'27px'}}/></span>  <Button type='primary' onClick={showModal}>
          Add New Contract <PlusOutlined />
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <div>
      <Modal
        title={currentContract ? "Edit Contract" : "Create New Contract"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          name="contractForm"
          onFinish={onFinish}
          initialValues={currentContract || {}}
        >
          <Form.Item
            label="Contract Code"
            name="action"
            rules={[{ required: true, message: "Please enter the contract code!" }]}
          >
            <Input placeholder="Enter contract code" />
          </Form.Item>
          <Form.Item
            label="Contract Name"
            name="contractname"
            rules={[{ required: true, message: "Please enter the contract name!" }]}
          >
            <Input placeholder="Enter contract name" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter a description!" }]}
          >
            <Input placeholder="Enter description" />
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true, message: "Please select status!" }]}>
            <Input placeholder="Enter status" />
          </Form.Item>
        </Form>
      </Modal>
      </div>
    </div>
  );
};

export default ContractManagement;
