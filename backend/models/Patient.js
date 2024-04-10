const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name : {
        type : string , 
        required : true
    },
    email : {
        type : string,
        required : true,
        unique : true
    },
    password : {
        type : string,
        required : true
    },
    phone : {
        type : string,
        required : true
    },
    description : {
        type : string,
        required : true
    },
} , {timestamps : true});

const Patient = mongoose.model('Patient' , patientSchema);

module.exports = Patient;