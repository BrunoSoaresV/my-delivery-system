import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AddressForm from '../components/AddressForm';

const CreateAddress = () => {
  const history = useHistory();

  const saveAddress = async (address) => {
    try {
      await axios.post('http://localhost:5000/api/addresses', address);
      history.push('/');
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  return (
    <div>
      <h1>Cadastrar Endereço</h1>
      <AddressForm onSave={saveAddress} />
    </div>
  );
};

export default CreateAddress;
