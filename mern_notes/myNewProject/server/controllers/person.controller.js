const Person = require('../models/person.model');

module.exports.index = (request, response) => { //not necessary for MERN because it is the default route in React 
  // Original comment: Return a simple "Hello World" message
    response.json({
        message: "Hello World"
    });
    }

    module.exports.createPerson = (request, response) => {
    Person.create(request.body)
        .then(person => response.json(person))
        .catch(err => {
        // Log the validation errors
        console.error(`Validation errors: ${err.message}`);
        
        response.json(err);
        });
    }

    module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => {
        // Original comment: Console log the retrieved persons (optional, for troubleshooting)
        console.log(persons);
        response.json(persons);
        })
        .catch(err => {
        // Original comment: Console log any errors (optional, for troubleshooting)
        console.log(err);
        response.json(err);
        });
    }

    module.exports.getPerson = (request, response) => {
    Person.findOne({ _id: request.params.id })
        .then(person => response.json(person))
        .catch(err => response.json(err));
    }

    module.exports.updatePerson = (request, response) => {
        const { firstName, lastName } = request.body;

        // Validate the fields
    if (!firstName || !lastName) {
        return response.status(400).json({ error: 'First name and last name are required!' });
    }

    Person.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => {
            // Log the validation errors
            console.error(`An error occurred while updating the person: ${err.message}`);
            response.status(500).json({ error: 'An error occurred while updating the person' });
        });
    }

    module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
    }