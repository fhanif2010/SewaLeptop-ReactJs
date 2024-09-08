import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Transaction.css';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, [])

    const fetchTransactions = async () => {
        try {
            const response = await axios.get('http://172.16.47.111:3000/Transaction');
            setTransactions(response.data);
        } catch (error) {
            console.error('Ada kesalahan saat mengambil data:', error);
        }
    };

    const handleSelesai = async (transaction) => {
        try {
            const currentLeptop = await axios.get(`http://172.16.47.111:3000/Leptop/${transaction.productId}`);
            const updateResponse = await axios.put(`http://172.16.47.111:3000/Leptop/${transaction.productId}`, {
                ...currentLeptop.data,  // Preserve other fields like 'nama' and 'gambar'
                status: true
            });   
            console.log('Status Leptop berhasil diperbarui:', updateResponse.data);

            const deleteResponse = await axios.delete(`http://172.16.47.111:3000/Transaction/${transaction.id}`);
            console.log('Transaksi berhasil dihapus:', deleteResponse.data);
            
            fetchTransactions();
        }catch (error) {
            console.error('Ada Kesalahan saat memperbarui status leptop:', error)
        }
    };
        return (
            <div className="container">
                <h1>Data Transaksi</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nama Laptop</th>
                            <th>Nama Pemesan</th>
                            <th>Tanggal Memesan</th>
                            <th>NIP</th>
                            <th>Unit</th>
                            <th>Telfon</th>
                            <th>Pengembalian Sewaan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td>{transaction.leptop}</td>
                                <td>{transaction.customer}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.nip}</td>
                                <td>{transaction.unit}</td>
                                <td>{transaction.telfon}</td>
                                <td>
                                    <button className="return-button" onClick={() => handleSelesai(transaction)}>Selesai</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    export default Transaction;