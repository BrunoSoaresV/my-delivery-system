import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddressList from './components/AddressList';
import CreateAddress from './pages/CreateAddress';
import EditAddress from './pages/EditAddress';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Router basename="/my-delivery-system">
      <div className="container text-center">
        <h1 className="my-4">Sistema de Delivery Interplanetário</h1>
        <Routes>
          <Route path="/" element={<AddressList />} />
          <Route path="/create" element={<CreateAddress />} />
          <Route path="/edit/:id" element={<EditAddress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
