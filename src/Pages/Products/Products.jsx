import React from 'react'
import { Space, Table, Tag,Button } from 'antd';
import { EditOutlined, DeleteOutlined ,PlusOutlined, EyeOutlined} from "@ant-design/icons";


const Products = () => {

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
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)} style={{ color: "#1890ff" }}>
            <EditOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
          </a>
          <a onClick={() => handleEdit(record)} style={{ color: "#1890ff" }}>
                  <EyeOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
                </a>
                <a onClick={() => handleEdit(record)} style={{ color: "#1890ff" }}>
                  <DeleteOutlined style={{ fontSize: "18px",color:'red' }} /> {/* Edit icon */}
                </a>
        </Space>
      ),
    },
   
  ];
  const data = [
    {
      key: '1',
      sigmacode: 'HAVITB1',
      title: "health aid vit b1 thiam sr100#",
      group_id: 'hd fridge line otc',
      Packsize: 90,
      trade_price:4.46,
      qty:10,
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
      status:"Not Available"


    }, {
      key: '1',
      sigmacode: '+KODFC',
      title: "kodak fun gold flash camera #",
      group_id: 'ap livery b/generic',
      Packsize: 90,
      trade_price:5.52,
      qty:10,
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
      status:"  Available"


    },
   
    
  ];
  const handleEdit =()=>{

  }
  const showModal =()=>{

  }
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
    </div>
  )
}

export default Products