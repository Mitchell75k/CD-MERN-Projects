/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const ProductList = ({removeFromDom, product, setProduct }) => {
useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then(response => {
        console.log(response.data);
        setProduct(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}, [setProduct]);

const deleteProduct = (productId) => {
    axios.delete("http://localhost:8000/api/products/" + productId)
    .then(response => {
        removeFromDom(productId)
    })
    .catch(error => console.log(error));
};

    return (
        <div>
            <h2>Product List</h2>
            {product.map((product, index) => (
                <div key={index}>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <Link to={`/products/${product._id}`}>{product.title}&rsquo;s Page!</Link>
                |
                <Link to={"/products/edit/" + product._id}> Edit</Link>
                |
                <button style={{color: 'red' }} onClick={(e)=>{deleteProduct(product._id)}}>Delete </button>
            </div>
            ))
            }
        </div>
        );
    };

ProductList.propTypes = {
    product: PropTypes.array.isRequired,
    setProduct: PropTypes.func.isRequired,
    removeFromDom: PropTypes.func.isRequired
};

export default ProductList;