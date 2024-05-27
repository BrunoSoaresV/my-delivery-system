import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
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
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label htmlFor="lot" className="form-label">Lote:</label>
        <input
          type="text"
          className="form-control"
          id="lot"
          name="lot"
          value={address.lot}
          onChange={handleChange}
          required
          pattern="\d{4}"
          title="Lote deve ter 4 dígitos"
        />
      </div>
      <button type="submit" className="btn btn-primary">Salvar</button>
    </form>
  );
};

export default AddressForm;
