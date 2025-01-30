import './App.css';
 import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import OfferManagement from './Pages/Management/OfferManagement';

import PublicRoute from './Routes/PublicRoute';
import ProtectedRoute from './Routes/ProtectedRoute';
import Sider from './PageLayout/PageSider';
import PageSider from './PageLayout/PageSider';
import ProductCategory from './Pages/Products/ProductCategory';
import Products from './Pages/Products/Products';
import Settings from './Pages/Settings';
import UserList from './Pages/Management/UserList';
import Orders from './Pages/Orders/Orders';
import Inventry from './Pages/Inventry';
import ClientManagement from './Pages/Management/ClientManagement';
import SubClient from './Pages/Management/SubClient';
import ContractManagement from './Pages/Management/ContractManagement';
import OrderManagement from './Pages/Management/OrderManagement';
 import SubscriptionManage from './Pages/Management/SubscriptionManage';
import TenantManagement from './Pages/Management/TenantManagement';
import RoleManagement from './Pages/Management/RoleManagement';
import EnqueryManagement from './Pages/Management/EnqueryManagement';
import ProductsPrices from './Pages/Products/ProductsPrices';
import ProductConfigurations from './Pages/Products/ProductConfigurations';
import Loginstats from './Pages/Management/Loginstats';
import AbondonedCard from './Pages/Management/AbondonedCard';
import MyProfile from './Pages/MyProfile';
import ForgetPassword from './Pages/ForgetPassword';


function App() {
  return (

    <div className="App">

<Router>
      <div className="App">
        <PageSider> 
        <Routes>
          {/* Define routes here */}
          <Route path="*" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/offermanagement" element={<OfferManagement/>} />
          <Route path="/productcategory" element={<ProductCategory/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/userlist" element={<UserList/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/inventry" element={<Inventry/>} />
          <Route path="/clientmanagement" element={<ClientManagement/>} />
          <Route path="/subclient" element={<SubClient/>} />
          <Route path="/contractmanagement" element={<ContractManagement/>} />
          <Route path="/ordermanagement" element={<OrderManagement/>} />
          <Route path="/tenentmanage" element={<TenantManagement/>} />
          <Route path="/subscriptionmanage" element={<SubscriptionManage/>} />
          <Route path="/rolemanagement" element={<RoleManagement/>} />
          <Route path="/enquerymanagement" element={<EnqueryManagement/>} />
          <Route path="/productprices" element={<ProductsPrices/>} />
          <Route path="/productconfig" element={<ProductConfigurations/>} />
          <Route path="/loginstats" element={<Loginstats/>} />
          <Route path="/abandonedCard" element={<AbondonedCard/>} />
          <Route path="/myProfile" element={<MyProfile/>} />
          <Route path="/forgetPassword" element={<ForgetPassword/>} />


        </Routes>
        </PageSider>
      </div>
    </Router>
    </div>

  );
}

export default App;
