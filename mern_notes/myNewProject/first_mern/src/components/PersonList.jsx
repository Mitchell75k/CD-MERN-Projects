/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data));
    }, [])
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId))
    }
    return (
        <div>
            {people.map((person, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/people/" + person._id}>
                            {person.firstName}, {person.lastName}
                        </Link>
                        |
                        <Link to={"/people/edit/" + person._id}>
                            Edit
                        </Link> 
                        |
                        <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                    </p>
                )
            })}
        </div>
    )
}
PersonList.propTypes = {
people: PropTypes.array.isRequired,
};

export default PersonList;