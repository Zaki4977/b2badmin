import React from 'react'
import { Space, Table, Tag } from 'antd';

const Loginstats = () => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
         },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Login Time',
          dataIndex: 'login_time',
          key: 'login_time',
        },
        {
          title: 'Logout Time',
          key: 'logout_time',
          dataIndex: 'logout_time',
           
        },
        {
            title: 'Visited Pages',
            key: 'visited_pages',
            dataIndex: 'visited_pages',
             
          },
        //   {
        //     title: ' Pages Time',
        //     key: 'pages_time',
        //     dataIndex: 'pages_time',
             
        //   },
        
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          email: "john@genImagePreviewStyle.com",
          login_time: '10-Nov-2024 10:00 AM',
          logout_time: '10-Nov-2024 11:30 AM',
          visited_pages: 'Client,Order,Tenant',
        //   pages_time: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Prashant Kale',
            email: "prashant@gmail.com",
            login_time: '20-Nov-2024 01:00 PM',
            logout_time:'20-Nov-2024 04:00 PM',
            visited_pages: ' Order Management,Products',
            // pages_time: ['nice', 'developer'],
        },
        {
            key: '3',
            name: 'jaki Ahmad',
            email: "jaki@gmail.com",
            login_time: '20-Jan-2025 10:00 AM',
            logout_time: "20-Jan-2025 11:00 AM",
            visited_pages: 'Products,Orders',
            // pages_time: ['nice', 'developer'],
        },
        {
            key: '4',
          name: 'Sanket Solanke',
          email: "sanket@gmail.com",
          login_time: '26-Jan-2025 10:00 AM',
          logout_time: '26-Jan-2025 12:00 PM',
          visited_pages: 'My Profile',
        //   pages_time: ['nice', 'developer'],
        }
      ];
      
  return (
    <div> 
               <div>
        <h2 style={{ textAlign: "left" }}>LOGIN SUMMARY</h2>
      </div>

        <di><Table columns={columns} dataSource={data} /></di>
    </div>
  )
}

export default Loginstats