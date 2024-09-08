import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import '../App.css';
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import ProductTersedia from "../pages/ProductTersedia/ProductTersedia";
import Transaction from "../pages/Transaction/Transaction";
import Nav from "../components/Nav";
import OrderForm from "../pages/OrderForm/OrderForm";
import Login from "../pages/Login/Login";

const Routers = () => {
    const location = useLocation();
    const isExcludePage = location.pathname === '/login'

  return (
    <>
    {!isExcludePage && (
        <>
            <Navbar className="Navbar" />
            <Nav />
        </>
    )}
      <div className={isExcludePage ? 'login-page' : 'main-content'}>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/product" Component={Product} />
          <Route path="/product-tersedia" Component={ProductTersedia} />
          <Route path="/transaction" Component={Transaction} />
          <Route path="/orderForm" Component={OrderForm} />
        </Routes>
      </div>
    </>
  )
}

export default Routers;