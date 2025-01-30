import React ,{useState}from 'react'
import { Space, Table, Tag,Button, Modal, Form, Input, InputNumber,Select } from 'antd';
import { EditOutlined, DeleteOutlined ,PlusOutlined, EyeOutlined} from "@ant-design/icons";


const Products = () => {
  const { Option } = Select;

     const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);
    const [data, setData] = useState([
      {
        key: '1',
        sigmacode: 'HAVITB1',
        title: "health aid vit b1 thiam sr100#",
        group_id: 'hd fridge line otc',
        Packsize: 90,
        trade_price:4.46,
        qty:10,
        prodcategory:'healthcare',

        status:"Not Available"
      },
      {
        key: '1',
        sigmacode: '+FUJIFC',
        title: "fujiquick+flash camera",
        group_id: 'ap livery b/generic',
        Packsize: 90,
        trade_price:4.95,
        qty:20,
        prodcategory:'healthcare',

        status:"Not Available"
  
  
      }, {
        key: '1',
        sigmacode: '+KODFC',
        title: "kodak fun gold flash camera #",
        group_id: 'ap livery b/generic',
        Packsize: 90,
        trade_price:5.52,
        qty:10,
        prodcategory:'healthcare',
        status:"  Available"
  
  
      },
      {
        key: '1',
        sigmacode: '+KODGB12',
        title: "kodak new 200 135 24 g.b #",
        group_id: 'hd fridge line otc',
        Packsize: 90,
        trade_price:2.88,
        qty:10,
        prodcategory:'healthcare',
        status:"  Available"
  
  
      },
    ]);
  const columns = [
    {
      title: 'Prod Code',
      dataIndex: 'sigmacode',
      key: 'sigmacode',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Group Id',
      dataIndex: 'group_id',
      key: 'group_id',
       
    },
    {
      title: 'Packsize',
      dataIndex: 'Packsize',
      key: 'Packsize',
    },
    {
      title: 'Trade Price',
      dataIndex: 'trade_price',
      key: 'trade_price',
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'qty',
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    // },
    {
      title: 'Product Category',
      dataIndex: 'prodcategory',
      key: 'prodcategory',
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
  
  const showModal = () => {
    setIsEditing(false);
    setCurrentRecord(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  // Open Modal for Editing Existing Product
  const handleEdit = (record) => {
    setIsEditing(true);
    setCurrentRecord(record);
    form.setFieldsValue(record); // Populate form with record data
    setIsModalOpen(true);
  };

  // Handle Delete Product
  const handleDelete = (record) => {
    Modal.confirm({
          title: "Are you sure?",
          content: `This will delete the record of ${record.sigmacode}`,
          onOk: () => {
            // message.success(`Deleted ${record.name}`);
            // Add logic to remove the item from the dataSource.
          },
        });
  };

  // Handle Form Submission (Create or Edit)
  const handleSubmit = (values) => {
    if (isEditing) {
      // Edit Existing Product
      setData(prevData => prevData.map(item => (item.key === currentRecord.key ? { ...values, key: item.key } : item)));
    } else {
      // Add New Product
      const newKey = `${data.length + 1}`;
      setData([...data, { ...values, key: newKey }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
       <div>
        <h2 style={{ textAlign: "left" }}>PRODUCTS</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <Button type='primary' onClick={showModal}>
          Add New Product <PlusOutlined />
        </Button>
      </div>
     <div>
      <Table columns={columns} dataSource={data} />
    </div>
    <div>
    <Modal
        title={isEditing ? "Edit Product" : "Add New Product"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>Cancel</Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            {isEditing ? "Update Product" : "Add Product"}
          </Button>
        ]}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="sigmacode" label="Prod Code" rules={[{ required: true, message: "Please enter Prod Code" }]}>
            <Input />
          </Form.Item>

          <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter Title" }]}>
            <Input />
          </Form.Item>

          <Form.Item name="group_id" label="Group Id" rules={[{ required: true, message: "Please enter Group Id" }]}>
            <Input />
          </Form.Item>

          <Form.Item name="Packsize" label="Packsize" rules={[{ required: true, message: "Please enter Packsize" }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="trade_price" label="Trade Price" rules={[{ required: true, message: "Please enter Trade Price" }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="qty" label="Qty" rules={[{ required: true, message: "Please enter Qty" }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="status" label="Status" rules={[{ required: true, message: "Please select Status" }]}>
            <Select>
              <Option value="Available">Available</Option>
              <Option value="Not Available">Not Available</Option>
            </Select>
          </Form.Item>

          <Form.Item name="prodcategory" label="Product Category" rules={[{ required: true, message: "Please enter Product Category" }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
    </div>
  )
}

export default Products