import React, { useState } from "react";
import { Button, Table, Modal, Switch, Form, Input, message } from "antd";
import { EditOutlined, DeleteOutlined ,PlusOutlined,EyeOutlined} from "@ant-design/icons";
import { Select } from "antd";

const SubscriptionManage = () => {
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
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "Client Name",
      dataIndex: "name",
    },
    {
      title: "Modules",
      dataIndex: "modules",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "12px" }}>
          <a onClick={() => handleEdit( record)} style={{ color: "#1890ff" }}>
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
      name: "Webdezign Com	",
      modules: "Contract,Order,Offer",
      status: "Active",
      action: 70,
    },
    {
      key: "2",
      name:"Carter Chemist (2005) Ltd	" ,
      modules: "Enquery,Order",
      status: "Active",
      action: 89,
    },
    {
      key: "3",
      name: "Anand Bhatt Customers	",
      modules: "Management ,Login Summary",
      status: "Expire",
      action: 70,
    },
    {	
      key: "4",
      name: "Pathik Vyas Customers",
      modules: "Login Summary,Offer",
      status: "Expire",
      action: 89,
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleToggle = (record, checked) => {
    console.log("Toggle changed:", { id: record.key, status: checked });
    // Example: Send an API request to update the status
  };

  const handleEdit = (record) => {
    // Set the record values in the form for editing
    form.setFieldsValue({
      name: record.name,
      modules: record.modules || "", // Assuming email is a part of the data
      status: record.status || "", // Example field mapping
    });
    setIsModalOpen(true); // Open the modal
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
    if (formMode === "add") {
      console.log("Adding new subscription:", values);
      message.success("Subscription added successfully.");
    } else if (formMode === "edit") {
      console.log("Editing subscription:", { ...currentRecord, ...values });
      message.success("Subscription updated successfully.");
    }
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div>
      <div>
        <h2 style={{ textAlign: "left" }}>SUBSCRIPTION MANAGEMENT</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Button type='primary' onClick={showModal}>
          Add New Subscription <PlusOutlined />
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <div>
      
      <Modal
        title={formMode === "add" ? "Add Subscription" : formMode === "edit" ? "Edit Subscription" : "View Subscription"}
        open={isModalOpen}
        onOk={formMode !== "view" ? form.submit : handleOk}
        onCancel={handleCancel}
         
      >
        {formMode === "view" ? (
          <div>
            <p><strong>Name:</strong> {currentRecord?.name}</p>
            <p><strong>Modules:</strong> {currentRecord?.modules}</p>
            <p><strong>Status:</strong> {currentRecord?.status}</p>
          </div>
        ) : (
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter the name!" }]}>
              <Input placeholder="Enter name" />
            </Form.Item>
            <Form.Item
              label="Modules"
              name="modules"
              rules={[{ required: true, message: "Please enter the modules!" }]}
            >
<Select
      defaultValue="Client"
      mode="multiple"
      showSearch
      style={{
        width: "100%",
      }}
      onChange={handleChange}
      options={[
        {
          value: 'client',
          label: 'Client',
        },
        {
          value: 'subclient',
          label: 'Sub Client',
        },
        {
          value: 'offer',
          label: 'Offer',
        },
        {
          value: 'enquery',
          label: 'Enquery',
        },
        {
          value: 'loginsummary',
          label: 'Login Summary',
        },
         
      ]}
    />            </Form.Item>
            <Form.Item
              label="Status"
              name="status"
              rules={[{ required: true, message: "Please select the status!" }]}
            >
<Select
      defaultValue="Active"
       showSearch
      style={{
        width: "100%",
      }}
      onChange={handleChange}
      options={[
        {
          value: 'active',
          label: 'Active',
        },
        {
          value: 'inactive',
          label: 'InActive',
        },
        
         
      ]}
    />              </Form.Item>
          </Form>
        )}
      </Modal>
      </div>
    </div>
  );
};

export default SubscriptionManage;
