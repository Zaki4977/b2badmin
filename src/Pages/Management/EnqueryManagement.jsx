import React,{useState} from 'react'
import { Modal, Space, Table, Tag,Button ,Form,Input,Descriptions,Card} from 'antd';
import { EditOutlined, EyeOutlined,HighlightOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const EnqueryManagement = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
      const [form] = Form.useForm(); // Form instance for managing form state
      const [selectedRecord, setSelectedRecord] = useState(null); // State to store the selected record
    
    const showModal = (record) => {
        setSelectedRecord(record);
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
            title: 'No',
            dataIndex: 'number',
            key: 'number',
           },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
         },
        {
          title: 'Enquery Type',
          dataIndex: 'enquery_type',
          key: 'enquery_type',
        },
        {
          title: 'Order Number',
          dataIndex: 'order_number',
          key: 'order_number',
        },
        {
          title: 'Subject',
          key: 'Subject',
          dataIndex: 'Subject',
           
        },
        {
            title: 'Created On',
            dataIndex: 'created_on',
            key: 'created_on',
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button style={{backgroundColor:'navy',color:'white'}} onClick={()=>showModal(record)}>  <EyeOutlined/></Button>
             </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          number:1,
          name: 'Vikas Saujani',
          enquery_type: "other",
          order_number: 'ord_0023',
          Subject: "Delete Account",
          created_on: '19-Nov-2024',

        },
        {
            key: '2',
            number:2,
            name: 'Jaki Amhmad',
            enquery_type: "Delivery",
            order_number: 'ord_0035',
            Subject: "Delivery",
            created_on: '29-Nov-2024',
        },
        {
            key: '3',
            number:3,
            name: 'Prashant Jadhav',
            enquery_type: "Prices",
            order_number: 'ord_0040',
            Subject: "Prices",
            created_on: '19-Dec-2024',
        },
        {
            key: '4',
            number:4,
            name: 'Vikas Saujani',
            enquery_type: "Inventory",
            order_number: 'ord_0023',
            Subject: "Price test",
            created_on: '01-Nov-2024',
        },
        {
            key: '5',
            number:5,
            name: 'Vikas Saujani',
            enquery_type: "other",
            order_number: 'ord_0023',
            Subject: " Account Opening",
            created_on: '20-Dec-2024',
        },
      ];

       
  return (
    <div>
        <div>
        <h2 style={{ textAlign: "left" }}>ENQUERY MANAGEMENT</h2>

        </div>
        
        <div>
        <Table columns={columns} dataSource={data} />
        </div>
        <div>
        <Modal title="Enquery " open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
        {selectedRecord && (
    <>
        <Descriptions column={1} bordered>
            <Descriptions.Item label="Number">{selectedRecord.number}</Descriptions.Item>
            <Descriptions.Item label="  Name">
              {selectedRecord.name}
            </Descriptions.Item>
            <Descriptions.Item label="Enquery Type">
              {selectedRecord.enquery_type}
            </Descriptions.Item>
            <Descriptions.Item label="Order Number">
              {selectedRecord.order_number}
            </Descriptions.Item>
            <Descriptions.Item label="Subject">
              {selectedRecord.Subject}
            </Descriptions.Item>
            <Descriptions.Item label="Created On">
              {selectedRecord.created_on}
            </Descriptions.Item>
             
          </Descriptions>

            <Card style={{marginTop:'20px'}}>
           <Form
          form={form}
          layout="vertical"
          name="createOrEditSubClientForm"
          onFinish={handleOk}
        >
          <Form.Item
            label="Replay"
            name="name"
            rules={[{ required: true, message: "Please enter the Replay!" }]}
          >
            <TextArea placeholder="Enter Replay" />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
             Submit
            </Button>
          </Form.Item>
        </Form>
        </Card>
        </>
        )}
       </Modal>
        </div>
         </div>
  )
}

export default EnqueryManagement