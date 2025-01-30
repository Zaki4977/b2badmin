import React, { useState } from "react";
import { Button, Table, Modal, Switch, Form, Input, message ,Descriptions} from "antd";
import { EditOutlined, DownloadOutlined ,PlusOutlined, FundViewOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const OrderManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // Form instance for managing form state
  const [selectedRecord, setSelectedRecord] = useState(null); // State to store the selected record

  const showModal = (record) => {
    setSelectedRecord(record); // Set the selected record for viewing
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedRecord(null); // Reset the record when the modal is closed
  };

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
      {
        title: "View",
        dataIndex: "erp_order_id",
        render: (_, record) => (
              <div style={{ display: "flex", gap: "8px" }}>
                <a onClick={() => showModal(record)} style={{ color: "#1890ff" }}>
                  <EyeOutlined style={{ fontSize: "18px" }} /> {/* Edit icon */}
                </a>
                
              </div>
            ),
      },
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
  const handleToggle = (record, checked) => {
    console.log("Toggle changed:", { id: record.key, status: checked });
    // Example: Send an API request to update the status
  };

  const handleEdit = (record) => {
    Modal.info({
      title: "Edit Record",
      content: `Edit details for ${record.name}`,
    });
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
        <h2 style={{ textAlign: "left" }}>ORDER MANAGEMENT</h2>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
      <span style={{paddingRight:'15px'}}><DownloadOutlined style={{fontSize:'27px'}}/></span>  <Button type='primary' onClick={showModal}>
          Add New Contract <PlusOutlined />
        </Button>
      </div> */}
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <div>
      {selectedRecord && (
        <Modal
          title="View Order Details"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={[
            <Button key="close" type="primary" onClick={handleCancel}>
              Close
            </Button>,
          ]}
        >
          <Descriptions column={1} bordered>
            <Descriptions.Item label="Order ID">{selectedRecord.order_id}</Descriptions.Item>
            <Descriptions.Item label="Sub Client">
              {selectedRecord.contractname}
            </Descriptions.Item>
            <Descriptions.Item label="Client">
              {selectedRecord.client}
            </Descriptions.Item>
            <Descriptions.Item label="ERP Order ID">
              {selectedRecord.erp_order_id}
            </Descriptions.Item>
            <Descriptions.Item label="Sub Total">
              {selectedRecord.sub_total}
            </Descriptions.Item>
            <Descriptions.Item label="Ordered On">
              {selectedRecord.order_on}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {selectedRecord.status}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      )}
      </div>
    </div>
  );
};

export default OrderManagement;
