import React from 'react';
import './OrderForm.css';
import Form from '../../components/Form';
import { useLocation } from 'react-router-dom';

const OrderForm = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <p>No Product Data Available</p>
  }

  return (
    <div className='OrderForm'>
      <Form />
      <div className='Detail'>
        <img src={product.image} alt="Universitas Terbuka Logo" />
        <div>
          <p>{product.name}</p>
          <table>
            <tbody>
                <tr>
                  <td>Processor</td>
                  <td>{product.processor}</td>
                </tr>
                <tr>
                  <td>Grafis</td>
                  <td>{product.grafis}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{product.ram}</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>{product.disk}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
