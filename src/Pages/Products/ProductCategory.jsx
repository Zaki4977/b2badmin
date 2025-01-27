import React from 'react'
import { Space, Table, Tag } from 'antd';

const ProductCategory = () => {

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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
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
    },
    {
      key: '2',
      prod_code: '000-1289',
      prod_desc: "ASHTON & PARSONS INFANTS POWDERS 0.002ML  20",
      prod_grp: '12ET',
      company: 'Sigma Pharmaceuticals Plc',
      parent_category:"OTC H&B",
    },
    {
      key: '3',
      prod_code: '000-2691',
      prod_desc: "DULCOLAX LAXATIVE TABLETS 5MG  20",
      prod_grp: '200OT',
      company: 'Sigma Pharmaceuticals Plc',
      parent_category:"OTC H&B",
    },
  ];
  
  return (
    <div> 
      <div>
      <h2 style={{ textAlign: "left" }}>PRODUCT  CATEGORY</h2>

      </div>
      <div>
      <Table columns={columns} dataSource={data}  pagination={false}/>
      </div>
    </div>
  )
}

export default ProductCategory