/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();


useEffect(() => {
    axios.
        get("http://localhost:8000/api/products/" + id) //getting the product by id
        .then(response => {
        console.log(response.data);
        setTitle(response.data.title); //getting the title that was sent from the frontend
        setPrice(response.data.price);
        setDescription(response.data.description);
    })
    .catch(error => {
        console.log(error);
    });
}, []);

const updateProduct = (e) => {
    e.preventDefault();
    axios
        .patch("http://localhost:8000/api/products/" + id, {
        title, // this is shortcut syntax for title: title,
        price, // this is shortcut syntax for price: price,
        description, // this is shortcut syntax for description: description
        })
        .then(response => {
        console.log(response);
        navigate("/products");
        })
        .catch(error => console.log(error));
    };

return (
    <div>
        <h1>Update a Product</h1>
        <form onSubmit={updateProduct}>
        <p>
        <label>Title</label>
        <br />
        <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
            setTitle(e.target.value);
            }}
        />
        </p>
        <p>
            <label>Price</label>
        <br />
        <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => {
            setPrice(e.target.value);
            }}
        />
        </p>
        <p>
            <label>Description</label>
        <br />
        <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
            setDescription(e.target.value);
            }}
        />
        </p>
        <button>Update</button> {/* changed from input type="submit" */}
        </form>
    </div>
    );
};

export default Update;