import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddressList = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    async function fetchAddresses() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/addresses`);
        setAddresses(response.data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    }
    fetchAddresses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/addresses/${id}`);
      setAddresses(addresses.filter((address) => address.id !== id));
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Lista de Endereços</h2>
      {addresses.length > 0 ? (
        <ul className="list-group">
          {addresses.map((address) => (
            <li key={address.id} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <strong>{address.lot}</strong>
                <div>
                  <Link to={`/edit/${address.id}`} className="btn btn-sm btn-warning me-2">Editar</Link>
                  <button onClick={() => handleDelete(address.id)} className="btn btn-sm btn-danger">Excluir</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum endereço encontrado.</p>
      )}
      <Link to="/create" className="btn btn-primary mt-3">Cadastrar Novo Endereço</Link>
    </div>
  );
};

export default AddressList;
