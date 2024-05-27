import React, { useState } from 'react';

const AddressForm = ({ initialAddress, onSave }) => {
  const [address, setAddress] = useState(initialAddress || { lot: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lot">Lote:</label>
        <input
          type="text"
          id="lot"
          name="lot"
          value={address.lot}
          onChange={handleChange}
          required
          pattern="\d{4}"
          title="Lote deve ter 4 dígitos"
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddressForm;
