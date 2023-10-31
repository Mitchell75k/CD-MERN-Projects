/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then(response => {
            console.log(response.data);
            setProduct(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <p>Name: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default ProductDetail;