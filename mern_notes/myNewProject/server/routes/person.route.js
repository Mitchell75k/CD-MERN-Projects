const PersonController = require('../controllers/person.controller');
module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.get('/api/people', PersonController.getAllPeople);     
    app.get('/api/people/:id', PersonController.getPerson);
    //can be the same route as POST as long as we have a different http verb
    app.post('/api/people', PersonController.createPerson);

    //route to update a person
    app.patch('/api/people/:id', PersonController.updatePerson);

    //route to delete a person
    app.delete('/api/people/:id', PersonController.deletePerson); //note: "id" here MUST match params in controller



}