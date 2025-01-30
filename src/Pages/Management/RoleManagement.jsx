import React,{useState} from 'react'
import
{ Table ,Tag,Switch, Button,Input,Form,Modal,Select} from "antd" ;
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
const RoleManagement = () => {
  const [form] = Form.useForm(); // Form instance for managing form state
const [formMode, setFormMode] = useState("add"); // "add", "edit", or "view"
  const [currentRecord, setCurrentRecord] = useState(null); // Record to edit or view
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const dataSource = [
        {
            key: "1",
            title: "Administrator",
            access: ["Manage Client", "Manage Contracts"],
            status: "active",
          },
          {
            key: "2",
            title: "Manager",
            access: ["Manage SubClient", "Manage Supplier"],
            status: "inactive",
          },
          {
            key: "3",
            title: "Employee",
            access: ["Manage Pricing"],
            status: "active",
          },
          {
            key: "4",
            title: "Client",
            access: ["View Only"],
            status: "inactive",
          },
        ];
      
      const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
            title: "Access",
            dataIndex: "access",
            key: "access",
            render: (access) => (
              <>
                {access.map((item) => (
                  <Tag color="blue" key={item}>
                    {item}
                  </Tag>
                ))}
              </>
            ),
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
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
            render: (value, record) => (
                 <div><EditOutlined onClick={() => showModal("edit", record)} style={{color:'blue'}}/></div>
              ),
          },
      ];

      const handleToggle = (record, checked) => {
        console.log("Toggle changed:", { id: record.key, status: checked });
        // Example: Send an API request to update the status
      };


      const handleOpen =()=>{

      }

      const showModal = (mode, record = null) => {
        setFormMode(mode);
        setCurrentRecord(record);
    
        if (mode === "edit" && record) {
          form.setFieldsValue({
            title: record.title,
            access: record.access, 
          });
        } else if (mode === "add") {
          form.resetFields();
        }
    
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

      const handleChangeAccess = (value) => {
        console.log(`selected ${value}`);
      };

      
      const onFinish = () => {
        alert("submit");
      };
  return (
    <div>
         <div>
        <h2 style={{ textAlign: "left" }}>ROLE MANAGEMENT</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
        <Button type='primary' onClick={() => showModal("add")}>Add New Role<PlusOutlined/></Button>
      </div>
      <div>
        <Table dataSource={dataSource} columns={columns}  pagination={false}/>
        </div>

        <div>
        <Modal title={formMode === "add" ? "Add User" :   "Edit User"  }  open={isModalOpen}
        onOk={formMode !== "view" ? form.submit : handleOk}
        onCancel={handleCancel}
        footer={false}
         >
          <Form form={form} layout='vertical' name='createUserForm' onFinish={onFinish}>
           
            <Form.Item label='Title' name='title' rules={[{ required: true, message: "Please select the title!" }]}>
            <Select
    //   defaultValue="User"
      style={{
        width: "100%",
      }}
      onChange={handleChange}
      options={[
        {
            value: 'Administration',
            label: 'Administration',
          },
        {
          value: 'Manager',
          label: 'Manager',
        },
        {
          value: 'client',
          label: 'Client',
        },
        {
          value: 'user',
          label: 'User',
        },
         
      ]}
    />
             </Form.Item>

            <Form.Item label='Access  ' name='access' rules={[{ required: true, message: "Please select the access!" }]}>
            <Select
      defaultValue="User"
      style={{
        width: "100%",
      }}
      showSearch
      mode='multiple'
      onChange={handleChangeAccess}
      options={[
        {
            value: 'manageaccess',
            label: 'ManageClient',
          },
        {
          value: 'manageprod',
          label: 'Manage SubClient',
        },
        {
          value: 'manageprice',
          label: 'Manage Contracts',
        },
        {
          value: 'Managesupplier',
          label: 'ManageSupplier',
        },
        {
            value: 'Manageprice',
            label: 'Manage Pricer',
          },
         
      ]}
    />            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
              {formMode === "add" ? "Add Role" : "Update Role"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        </div>
        </div>
  )
}

export default RoleManagement