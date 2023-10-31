// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ProductForm = ({ product, setProduct }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products', {
        title,
        price,
        description
    })
    .then(res => {
        console.log(res);
        console.log(res.data);
        setProduct([...product, res.data]);
    })
    .catch(err => console.log(err));
}

return (
    <form onSubmit={onSubmitHandler}>
    <p>
        <label>Title</label><br />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
    </p>
    <p>
        <label>Price</label><br />
        <input type="number" onChange={(e) => setPrice(e.target.value)} />
    </p>
    <p>
        <label>Description</label><br />
        <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
    </p>
    <input type="submit" />
    </form>
);
};

ProductForm.propTypes = {
product: PropTypes.array.isRequired,
setProduct: PropTypes.func.isRequired
};

export default ProductForm;