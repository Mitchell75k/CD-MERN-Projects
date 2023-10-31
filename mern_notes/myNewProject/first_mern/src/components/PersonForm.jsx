/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types';
const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [validationErrors, setValidationErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();

          // Validate the form fields
        const errors = [];
        if (!firstName) {
            errors.push('First name is required!');
        }
        if (!lastName) {
            errors.push('Last name is required!');
        }

        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            onSubmitProp({ firstName, lastName });
        }
    };
    return (
        <form>
             {/* Display the validation errors */}
            {validationErrors.length > 0 && (
                <ul>
                {validationErrors.map((error, index) => (
                    <li style={{ color: 'red' }} key={index}>{error}</li>
                ))}
                </ul>
            )}
            <p>
                <label>First Name</label><br/>
                <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                />
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
                />
            </p>
            <input type="submit" value="Submit" onClick={onSubmitHandler}/>
        </form>
        
    )
}

PersonForm.propTypes = {
    initialFirstName: PropTypes.string.isRequired,
    initialLastName: PropTypes.string.isRequired,
    onSubmitProp: PropTypes.func.isRequired
};
export default PersonForm;
