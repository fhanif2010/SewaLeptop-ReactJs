// src/components/dashboard/Dashboard.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

const Nav = () => {
  const location = useLocation();
  let text;

  switch (location.pathname) {
    case "/":
      text = "Home";
      break;
    case "/product":
      text = "Product";
      break;
    case "/product-tersedia":
      text = "Product Tersedia";
      break;
    case "/transaction":
      text = "Transaction";
      break;
  }

  return (
    <div className="Dashboard">
      <p>{text}</p>
      <div className='user-nav'>
      <FontAwesomeIcon icon={faCircleUser} className='Icon'/>
      </div>
    </div>
  );
};

export default Nav;
