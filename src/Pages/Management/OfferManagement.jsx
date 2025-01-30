import React ,{useState}from 'react'
import { Button, Space, Table, Tag,Modal,Form,Input,message, Select } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

const OfferManagement = () => {

   const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm(); 
  const [formMode, setFormMode] = useState("add"); // "add", "edit", or "view"
    const [currentRecord, setCurrentRecord] = useState(null)

    const handleEdit = (record) => {
      // Set the record values in the form for editing
      form.setFieldsValue({
        name: record.name,
        from_date: record.from_date || "", // Assuming email is a part of the data
        to_date: record.to_date || "", // Example field mapping
        order_method: record.order_method,
        ref_id: record.ref_id || "", // Assuming email is a part of the data
        status: record.status || "",
      });
      setIsModalOpen(true); // Open the modal
    };
  
    const handleDelete =(record)=>{
 Modal.confirm({
      title: "Are you sure?",
      content: `This will delete the record of ${record.name}`,
      onOk: () => {
        // message.success(`Deleted ${record.name}`);
        // Add logic to remove the item from the dataSource.
      },
    });
    }
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      
    },
    {
      title: 'From Date',
      dataIndex: 'from_date',
      key: 'from_date',
    },
    {
      title: 'To Date',
      dataIndex: 'to_date',
      key: 'to_date',
    },
    {
      title: 'Order Method',
      dataIndex: 'order_method',
      key: 'order_method',
    },
    {
      title: 'Ref Id',
      dataIndex: 'ref_id',
      key: 'ref_id',
    },
    
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
       
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)} style={{ color: "#1890ff" }}>
            <EditOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
          </a>
         
                <a onClick={() => handleDelete(record)} style={{ color: "#1890ff" }}>
                  <DeleteOutlined style={{ fontSize: "18px",color:'red' }} /> {/* Edit icon */}
                </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'OTC Offers 16.07.20',
      from_date: "2020-07-16",
      to_date: '2021-03-24',
      order_method: "By CSV / ERP / FTP",
      ref_id:'BHA - Weekly Offer',
      status:'Expired '
    },
    {
      key: '1',
      name: 'P.I Offers 16.07.20',
      from_date: "2020-07-16  ",
      to_date: '2020-07-16',
      order_method: "By CSV / ERP / FTP",
      ref_id:'BHA - Weekly Offer',
      status:'Expired '
    },
    {
      key: '1',
      name: 'Generic Offers 16.07.20',
      from_date: "2020-07-16",
      to_date: '2021-03-24',
      order_method: "By CSV / ERP / FTP",
      ref_id:'BHA - Weekly Offer',
      status:'Expired '
    },
  ];


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
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <h2 style={{display:'flex',justifyContent:'start'}}>
        OFFER MANAGEMENT
      </h2>
      <div style={{display:'flex',justifyContent:'end',marginBottom:'20px'}}>

        <Button type='primary' onClick={showModal}>Create Offer<PlusOutlined/></Button>
      </div>
      <div>
      <Table columns={columns} dataSource={data} />
      </div>
      <div>
      <Modal
        title={formMode === "add" ? "Add Offer Management" :  "Edit Offer Management"  }
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
            <Form.Item label="Prod Name" name="name" rules={[{ required: true, message: "Please enter the Prod Code!" }]}>
              <Input placeholder="Enter Prod Name" />
            </Form.Item>
            <Form.Item
              label="From Date"
              name="from_date"
              rules={[{ required: true, message: "Please enter the From Date" }]}
            >
                            <Input placeholder="Enter Prod From Date" />

           </Form.Item>
            <Form.Item
              label="To Date"
              name="to_date"
              rules={[{ required: true, message: "Please add the To Date" }]}
            >
                                          <Input placeholder="Enter To Date" />

             </Form.Item>
             <Form.Item
              label="Order Method"
              name="order_method"
              rules={[{ required: true, message: "Please add the Order Method!" }]}
            >
                                          <Input placeholder="Enter Order Method" />

             </Form.Item>
             <Form.Item
              label="Ref Id"
              name="ref_id"
              rules={[{ required: true, message: "Please add the Ref Id!" }]}
            >
                                          <Input placeholder="Enter a Ref Id" />

             </Form.Item>
             <Form.Item
              label="Status"
              name="status"
              rules={[{ required: true, message: "Please add the status!" }]}
            >
<Select
      defaultValue="Active"
       style={{
        width: "100%",
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Active',
          label: 'Active',
        },
        {
          value: 'expire',
          label: 'Expire',
        },
       
         
      ]}
    />            
             </Form.Item>
          </Form>
        )}
      </Modal>
      </div>
      </div>
  )
}

export default OfferManagement