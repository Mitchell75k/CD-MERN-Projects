/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
const DeleteButton = (props) => {
    const { personId, successCallback } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}

DeleteButton.propTypes = {
    personId: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
}

export default DeleteButton;
