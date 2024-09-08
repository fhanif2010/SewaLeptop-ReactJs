import React, { useEffect, useState } from "react";
import './Product.css';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('http://172.16.47.111:3000/Leptop');
                const sortedProducts = response.data.sort((a, b) => a.name.localeCompare(b.name));
                setProducts(sortedProducts);
            }catch (error){
                console.error('Ada Kesalahan Pada Saat Mengambil Data: ', error)
            }
        };

        fetchProduct();
    }, [])


    return (
        <div className="product">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
