/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
    <div>
            <ProductForm product={products} setProduct={setProducts} />
            <hr />
            <ProductList product={products} setProduct={setProducts} removeFromDom={removeFromDom} />
    </div>
    );
};

export default Main;