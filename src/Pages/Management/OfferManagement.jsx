import React from 'react'
import { Button, Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

const OfferManagement = () => {

  const handleEdit =()=>{

  }

  const columns = [
    {
      title: 'Name',
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
  return (
    <div>
      <h2 style={{display:'flex',justifyContent:'start'}}>
        OFFER MANAGEMENT
      </h2>
      <div style={{display:'flex',justifyContent:'end',marginBottom:'20px'}}>

        <Button type='primary' >Create Offer<PlusOutlined/></Button>
      </div>
      <div>
      <Table columns={columns} dataSource={data} />
      </div>
      </div>
  )
}

export default OfferManagement