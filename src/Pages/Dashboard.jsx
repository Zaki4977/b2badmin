import React from 'react'
import {  Card, Row,Col,Space, Table, Tag, Button } from 'antd'
import '../App.css';
import Barchart from './Barchart';
 

const Dashboard = () => {

 
  const columns = [
    {
      title: 'Order ID	',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Customer',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Status',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Total',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
     
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];


  const handleInventry =()=>{
    ("/inventry")
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