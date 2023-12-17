const mongoose = require('mongoose');

const path = require('path');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    quantity:{
        type:Number,
        required: true
    }
},{
    timestamps:true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;