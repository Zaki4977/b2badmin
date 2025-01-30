import React from 'react'
import {  Card, Row,Col,Space, Table, Tag, Button, Tooltip } from 'antd'
import '../App.css';
import Barchart from './Barchart';
import { useNavigate } from "react-router-dom";
import { RightOutlined, RightSquareOutlined } from '@ant-design/icons';

const Dashboard = () => {


  const navigate = useNavigate(); // Use useNavigate instead of useHistory

 
  const columns = [
    {
      title: "Order Id",
      dataIndex: "order_id",
    },
    {
      title: "Sub Client",
      dataIndex: "contractname",
    },
    {
        title: "Client",
        dataIndex: "client",
      },
    {
      title: "ERP Order Id",
      dataIndex: "erp_order_id",
    },
    {
        title: "Sub Total",
        dataIndex: "sub_total",
      },
      {
        title: "Ordered On",
        dataIndex: "order_on",
      },
      {
        title: "Status",
        dataIndex: "status",
      },
      // {
      //   title: "View",
      //   dataIndex: "erp_order_id",
      //   render: (_, record) => (
      //         <div style={{ display: "flex", gap: "8px" }}>
      //           <a onClick={() => showModal(record)} style={{ color: "#1890ff" }}>
      //             <EyeOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
      //           </a>
                
      //         </div>
      //       ),
      // },
    // {
    //   title: "Edit",
    //   dataIndex: "edit",
    //   render: (_, record) => (
    //     <div style={{ display: "flex", gap: "8px" }}>
    //       <a onClick={() => handleEdit(record)} style={{ color: "#1890ff" }}>
    //         <EditOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
    //       </a>
          
    //     </div>
    //   ),
       
    // },
    
    // {
    //   title: "Action",
    //   dataIndex: "action",

    //   render: (value, record) => (
    //     <Switch
    //       checked={record.status === "active"} // Example toggle condition
    //       onChange={(checked) => handleToggle(record, checked)} // Handle toggle logic
    //     />
    //   ),
    // },
     
  ];
  const data = [
    {
      key: "1",
      contractname: "	Market Chemist-NW8",
      client: "Webdezign Com",
      status: "Active",
      erp_order_id: 10,
      order_id: "ord_70",
      status:'Dispatch',
      sub_total:100,
      order_on:"01/01/2024"
    },
    {
      key: "2",
      contractname:"alis chemist - RIGPHA" ,
      client: " Carter Chemist (2005) Ltd	",
      status: "Active",
      erp_order_id: "02",
      sub_total:150,
      order_on:"02/01/2024",
      status:'Delivered',

      order_id: "ord_89",
    },
    {
      key: "3",
      contractname: "Wanstead Pharmacy - WANSTE",
      client: " Anand Bhatt Customers",
      status: "In Active",
      erp_order_id: "02211",
sub_total:300,
      order_on:"10/01/2024",
      status:'In transis',

      order_id: "ord_70",
    },
    {
      key: "4",
      contractname: "Jade Pharmacy - HERBUR",
      client: "Forte Direct Ltd	",
      status: "In Active",
      erp_order_id: "02211",
      sub_total:500,
      status:'Not Dispathed',

      order_on:"20/01/2024",

      order_id: "ord_89",
    },
  ];

  const handleviewMoreOrder =()=>{

navigate("/ordermanagement");
  }
  
  return (
    <div>
      <div className='Page-heading'>
      <h2>DASHBOARD</h2>
      </div>
       <Row gutter={10}>
        <Col span={6} >
         <div className='dashboard-card card-one'>
          <div style={{padding:'5px'}}>
          <h3>Total Sales</h3>
            <h3>1.25K</h3>
            </div>
            <span>
              
            </span>
         </div>
         </Col>
         <Col span={6}>
        <div className='dashboard-card card-two' >
          <div style={{padding:'5px'}}> 
        <h3>Total Orders</h3>
        <h3>1000</h3>
        <span></span>
        </div>

        </div>
        </Col>
        <Col span={6}>
        <div className='dashboard-card card-three'>
          <div style={{padding:'5px'}}>
          <h3>Active Customers</h3>
          <h3>2000</h3>
          <span></span>
          </div>
        </div>
        </Col>
        <Col span={6}>
        <div className='dashboard-card card-four'>
          <div style={{padding:'5px'}}>
          <h3>Sales  Growth</h3>
          <h3>1.25%</h3>
          <span>

          </span>
          </div>
        </div>
        </Col>
        </Row>
        <Row gutter={10}>
          <Col span={24}>
          <Card>
          <Barchart/>
          </Card>
          </Col>
           
        </Row>
        <Row >
          <Col span={24}>
          <Card>
          <h2 style={{textAlign:'left'}}>Order Overview</h2>
          <Table columns={columns} dataSource={data}  pagination={false}/>
          <div style={{display:'flex',justifyContent:'end',marginTop:'20px'}}>
            <Tooltip title={"View More"}>
          <a type='primary' onClick={handleviewMoreOrder}> <RightOutlined style={{fontSize:'28px'}}/></a>
          </Tooltip>
          </div>
          </Card>
        </Col>
        </Row>
        {/* <Row >
          <Col span={24}>
          <Card>
          <h2 style={{textAlign:'left'}}>Inventory Overview
           </h2>
          <Table columns={columns} dataSource={data}  pagination={false}/>
          <Button onClick={handleInventry}>See More</Button>
          </Card>
        </Col>
        </Row> */}
      </div>
  )
}

export default Dashboard