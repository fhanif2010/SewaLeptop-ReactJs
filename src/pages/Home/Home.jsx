import React, { useEffect, useState } from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopMedical, faLaptop } from '@fortawesome/free-solid-svg-icons';
import ProductTersedia from '../ProductTersedia/ProductTersedia.jsx';

const Home = () => {
    const [trueLeptop, setTrueLeptop] = useState(0);
    const [falseLeptop, setFalseLeptop] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const response = await fetch('http://172.16.47.111:3000/Leptop/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            let trueCount = 0;
            let falseCount = 0;

            data.forEach(item => {
                if (item.status === true) {
                    trueCount++;
                } else {
                    falseCount++;
                }
            });

            setTrueLeptop(trueCount);
            setFalseLeptop(falseCount);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="component">
            <div className="Home">
                <div className="Card">
                    <div className="Detail">
                        <p>Leptop Tersedia</p>
                        <h1>{trueLeptop}</h1>
                    </div>
                    <div className="Icon">
                        <FontAwesomeIcon icon={faLaptop} />
                    </div>
                </div>
                <div className="Card">
                    <div className="Detail">
                        <p>Leptop Digunakan</p>
                        <h1>{falseLeptop}</h1>
                    </div>
                    <div className="Icon">
                        <FontAwesomeIcon icon={faLaptopMedical} />
                    </div>
                </div>
            </div>
            <ProductTersedia />
        </div>
    )
}

export default Home;