import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineProduct, AiOutlineAppstoreAdd, AiOutlineHome  } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import './Navbar.css';
import Logo from "../../assets/image/Logo.png";

const menuItems = [
    { path: "/", icon: AiOutlineHome , label: "Home" },
    { path: "/product", icon: AiOutlineProduct, label: "Product" },
    { path: "/product-tersedia", icon: AiOutlineAppstoreAdd , label: "Product Ready" },
    { path: "/transaction",icon: GrTransaction, label: "Transaction" }
];

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const [animating, setAnimating] = useState(false);

    const handleMenuClick = (path) => {
        setAnimating(true);
        setTimeout(() => {
            setAnimating(false);
            navigate(path);
        }, 300);
    };

    return (
        <div className={`sidebar ${animating ? 'animating' : ''}`}>
            <div className="logo">
                <img src={Logo} alt="Universitas Terbuka Logo" />
                <div className="name">
                    <h2>Pusat Bisnis</h2>
                    <p>Universitas Terbuka</p>
                </div>
            </div>
            <hr />
            <div className="list">
                {menuItems.map((item) => (
                    <div
                        key={item.path}
                        className={`menu ${currentPath === item.path ? "active" : "inactive"}`}
                        onClick={() => handleMenuClick(item.path)}
                    >
                        <Link
                            to={item.path}
                            aria-label={item.label}
                            aria-current={currentPath === item.path ? "page" : undefined}
                        >
                            <item.icon /> <span className="label">{item.label}</span>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="logout-navbar">
                <p>Logout</p>
            </div>
        </div>
    );
};

export default Navbar;
