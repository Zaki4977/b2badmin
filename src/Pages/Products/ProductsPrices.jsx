import React,{useState} from 'react'
import { Space, Table, Tag ,Switch,Form,Button,Modal,Select,Input,message} from 'antd';
import { EditOutlined, DeleteOutlined ,PlusOutlined,EyeOutlined} from "@ant-design/icons";


const ProductPrices = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); 
const [formMode, setFormMode] = useState("add"); // "add", "edit", or "view"
  const [currentRecord, setCurrentRecord] = useState(null)

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
  const columns = [
    {
      title: 'Prod Code',
      dataIndex: 'prod_code',
      key: 'prod_cod',
     },
    {
      title: 'Prod Description',
      dataIndex: 'prod_desc',
      key: 'prod_desc',
    },
    {
      title: 'Prod Group',
      dataIndex: 'prod_grp',
      key: 'prod_grp',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Parent Category',
      dataIndex: 'parent_category',
      key: 'parent_category',
    },
    {
      title: 'Product Price',
      dataIndex: 'prod_price',
      key: 'prod_price',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (value, record) => (
        <Switch
          checked={record.status === "active"} // Example toggle condition
          onChange={(checked) => handleToggle(record, checked)} // Handle toggle logic
        />
      ),
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: "flex", gap: "12px" }}>
          <a onClick={() => handleEdit( record)} style={{ color: "#1890ff" }}>
            <EditOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
          </a>
 
          
        </div>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      prod_code: '000-0596',
      prod_desc: "OSMOLITE 1.5KCAL READY TO HANG BOTTLE 500ML",
      prod_grp: '200OT',
      company: 'Sigma Pharmaceuticals Plc',
      parent_category:"PI",
      prod_price:'100$'
    },
    {
      key: '2',
      prod_code: '000-1289',
      prod_desc: "ASHTON & PARSONS INFANTS POWDERS 0.002ML  20",
      prod_grp: '12ET',
      company: 'Sigma Pharmaceuticals Plc',
      parent_category:"OTC H&B",
      prod_price:'50$'

    },
    {
      key: '3',
      prod_code: '000-2691',
      prod_desc: "DULCOLAX LAXATIVE TABLETS 5MG  20",
      prod_grp: '200OT',
      company: 'Sigma Pharmaceuticals Plc',
      parent_category:"OTC H&B",
      prod_price:'150$'

    },
  ];

  const handleToggle = (record, checked) => {
    console.log("Toggle changed:", { id: record.key, status: checked });
    // Example: Send an API request to update the status
  };

  const handleEdit = (record) => {
    // Set the record values in the form for editing
    form.setFieldsValue({
      prod_code:record.prod_code,
      prod_desc: record.prod_desc,
      prod_grp: record.prod_grp || "", // Assuming email is a part of the data
      company: record.company || "",
      parent_category:record.parent_category,
      prod_price:record.prod_price
      
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
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  
  return (
    <div> 
      <div>
      <h2 style={{ textAlign: "left" }}>PRODUCT  PRICES</h2>

      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Button type='primary' onClick={showModal}>
          Add   Product Category <PlusOutlined />
        </Button>
      </div>
      <div>
      <Table columns={columns} dataSource={data}  pagination={false}/>
      </div>
      <div>
      <Modal
        title={formMode === "add" ? "Add Product " :  "Edit Product "  }
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
            <Form.Item label="Prod Code" name="prod_code" rules={[{ required: true, message: "Please enter the Prod Code!" }]}>
              <Input placeholder="Enter Prod Code" />
            </Form.Item>
            <Form.Item
              label="Prod Description"
              name="prod_desc"
              rules={[{ required: true, message: "Please enter the Prod Description!" }]}
            >
                            <Input placeholder="Enter Prod Description" />

           </Form.Item>
            <Form.Item
              label="Prod Group"
              name="prod_grp"
              rules={[{ required: true, message: "Please add the Prod Group!" }]}
            >
                                          <Input placeholder="Enter Prod Group" />

             </Form.Item>
             <Form.Item
              label="Company"
              name="company"
              rules={[{ required: true, message: "Please add the company!" }]}
            >
                                          <Input placeholder="Enter a company" />

             </Form.Item>
             <Form.Item
              label="Parent Category"
              name="parent_category"
              rules={[{ required: true, message: "Please add the Parent Company!" }]}
            >
                                          <Input placeholder="Enter a Parent Company" />

             </Form.Item>
             <Form.Item
              label="Product Price"
              name="prod_price"
              rules={[{ required: true, message: "Please add the Product Price!" }]}
            >
                                          <Input placeholder="Enter a Product Price" />

             </Form.Item>
          </Form>
        )}
      </Modal>
      </div>
    </div>
  )
}

export default ProductPrices