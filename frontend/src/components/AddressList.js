import React from 'react';

const AddressList = ({ addresses }) => {
  return (
    <div>
      <h2>Lista de Endereços</h2>
      {addresses.length === 0 ? (
        <p>Nenhum endereço encontrado.</p>
      ) : (
        <ul>
          {addresses.map((address, index) => (
            <li key={index}>
              <strong>{address.title}</strong>
              <p>{address.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressList;
