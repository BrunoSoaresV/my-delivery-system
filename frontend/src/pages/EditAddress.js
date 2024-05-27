import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddressForm from '../components/AddressForm';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const EditAddress = () => {
  const { id } = useParams();
  const history = useNavigate(); 
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/addresses/${id}`);
        setAddress(response.data);
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

    fetchAddress();
  }, [id, setAddress]);

  const saveAddress = async (updatedAddress) => {
    try {
      await axios.put(`http://localhost:5000/api/addresses/${id}`, updatedAddress);
      history('/');
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Editar Endereço</h1>
      {address ? (
        <AddressForm initialAddress={address} onSave={saveAddress} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default EditAddress;
