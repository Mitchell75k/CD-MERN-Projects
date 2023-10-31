const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],},
    lastName: { 
        type: String,
        required: [true, 'Last name is required'],}, 
    }, 
    { timestamps:{
        createdAt: true,
        updatedAt: true }, 
    }); //creates createdAt and updatedAt fields automatically
module.exports = mongoose.model('Person', PersonSchema);
