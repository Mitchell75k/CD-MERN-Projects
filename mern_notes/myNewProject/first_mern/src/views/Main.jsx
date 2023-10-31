/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
    const [personList, setPersonList] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/people/")
        .then(res => {
            setPersonList(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const removeFromDom = personId => {
        axios.delete("http://localhost:8000/api/people/" + personId)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setPersonList(personList.filter(person => person._id !== personId));
        })
        .catch(err => console.log(err));
    };

    const createPerson = personParam => {
        axios
        .post('http://localhost:8000/api/people/', personParam)
        .then(res => {
            console.log(res);
            console.log(res.data);
            return axios.get('http://localhost:8000/api/people/');
        })
        .catch(err => console.log(err));
        // // Fetch the updated list of people from the server NOT WORKING
        // axios.get('http://localhost:8000/api/people')
        //     .then(res => {
        //         setPersonList(res.data);
        //     })
        // .catch(err => console.log(err));
        };
    
    return (
        <div>
        <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
        <hr />
        <PersonList people={personList} removeFromDom={removeFromDom} />
        </div>
    );
};

export default Main;