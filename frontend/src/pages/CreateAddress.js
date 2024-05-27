import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import AddressForm from '../components/AddressForm';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CreateAddress = () => {
  const navigate = useNavigate(); 

  const saveAddress = async (address) => {
    try {
      await axios.post('http://localhost:5000/api/addresses', address);
      navigate('/');
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Cadastrar Endereço</h1>
      <AddressForm onSave={saveAddress} />
    </div>
  );
};

export default CreateAddress;
