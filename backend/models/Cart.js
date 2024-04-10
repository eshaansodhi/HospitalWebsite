const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient',
        required : true
    },
    items : [
        {
            medicine : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Medicine',
                required : true,
            }, 
            quantity : {
                type : number , 
                required : true,
                default : 1
            }
        }
    ]
} , {timestamps : true});

const Cart = mongoose.model('Cart' , cartSchema);   