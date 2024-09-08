import React, { useEffect, useState } from "react";
import '../Product/Product.css';
import  './ProductTersedia.css';    
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ProductTersedia = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fatchProduct = async () => {
            try {
                const response = await axios.get('http://172.16.47.111:3000/Leptop');
                const sortedProducts = response.data.sort((a, b) => a.name.localeCompare(b.name));
                setProducts(sortedProducts);
            }catch (error){
                console.error('Ada Kesalahan Pada Saat Mengambil Data: ', error)
            }
        };

        fatchProduct();
    }, [])

    const avaliableProducts = products.filter(product => product.status)

    const handlePageForm = (product) => {
        navigate(`/orderForm`, {state: {product}});
    }


    if (avaliableProducts.length === 0) {
        return <p>No Products Available.</p>
    }

    return (
        <div className="product">
            {avaliableProducts.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                    </div>
                    <button onClick={() => handlePageForm(product)}>Gunakan</button>
                </div>
            ))}
        </div>
    );
};

export default ProductTersedia;
