import React, { useState, useEffect } from "react";
import '../pages/OrderForm/OrderForm.css';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [customer, setCustomer] = useState('');
  const [nip, setNip] = useState('');
  const [email, setEmail] = useState('');
  const [telfon, setTelfon] = useState('');
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newOrder = { customer, nip, email, telfon, unit, date, productId: product?.id, leptop: product?.name };

    try {
      await axios.post('http://172.16.47.111:3000/Transaction', newOrder);
      console.log("data berhasil di simpan")

      if (product) {
        await axios.patch(`http://172.16.47.111:3000/Leptop/${product.id}`, {status: false});
      }

      navigate('/transaction');
      setCustomer('');
      setNip('');
      setEmail('');
      setTelfon('');
      setUnit('');
      setDate('');
    } catch (error) {
      console.error('Ada kesalahan saat mengirim data:', error);
    }
  };
  return (
    <div className="order-form-container">
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama:</label>
          <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>NIP:</label>
          <input type="tel" value={nip} onChange={(e) => setNip(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Telepon:</label>
          <input type="tel" value={telfon} onChange={(e) => setTelfon(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Unit :</label>
          <input type="tel" value={unit} onChange={(e) => setUnit(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Tanggal Sewa:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Kirim Pesanan</button>
      </form>
    </div>
  )
}

export default Form;