/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import PersonForm from '../components/PersonForm';
import DeleteButton from './DeleteButton';

const Update = () => {
    const { id } = useParams();
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const [validationError, setValidationError] = useState(''); //validationError to be displayed to the user

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
        .then(res => {
            setPerson(res.data);
            setLoaded(true);
        })
        .catch(error => {
            console.error(error);
        });
    }, [id]);

    const updatePerson = person  => {
        axios
        .patch(`http://localhost:8000/api/people/${id}`, person)
        .then(res => {
            console.log(res);
            navigate(`/people/`);
        })
        .catch(error => {
            if (error.response && error.response.status === 400) {
                // Validation error response from the server
                const { error: validationErrors } = error.response.data;
                setValidationError(validationErrors);
            } else {
                // Other error occurred
                console.error(error);
            }
        });
    };

    return (
        <div>
        <h1>Update a Person</h1>
        {loaded && (
            <>
            {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
            <PersonForm
                onSubmitProp={updatePerson}
                initialFirstName={person.firstName}
                initialLastName={person.lastName}
            />
            <DeleteButton personId={person._id} successCallback={() => navigate("/people/")} />
            </>
        )}
        </div>
    );
};



export default Update;