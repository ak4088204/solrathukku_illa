

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard'
import Alerts from './pages/Alert/Alerts';
import Shipments from './pages/shipment/Shipments';
import Location from './pages/Location/Home';
import Sales from './pages/sales/Sales';
import Report from './pages/Report/Report';
import Product from './pages/product/AddProduct'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path='/products' element={<Product />} >
          </Route>
          <Route exact path='/alerts' element={<Alerts />}></Route>
          <Route exact path='/shipments' element={<Shipments />}></Route>
          <Route exact path='/location' element={<Location />}></Route>
          <Route exact path='/sales' element={<Sales />}></Route>
          <Route exact path='/report' element={<Report />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

