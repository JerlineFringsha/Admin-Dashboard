import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import OrdersPage from "./pages/OrdersPage";
import SettingsPage from "./pages/SettingsPage";
import SetPage from "./pages/SetPage";

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />}/>
        <Route path='/sales' element={<SalesPage />}/>
        <Route path='/analytics' element={<AnalyticsPage />}/>
        <Route path='/orders' element={<OrdersPage />}/>
       <Route path='/settings' element={<SettingsPage />}/>
       <Route path='/set' element={<SetPage />}/>

      </Routes>
    </div>
  );
}

export default App;
