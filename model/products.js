const mongoose = require('mongoose');

const product = mongoose.Schema({
    productName:{
        type: String,
        required:true,
    },
    productDesc:{
        type:String,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productImage:{
        type:String,
        required:true
    }
},{timestamps:true});

const productModel = mongoose.model('products', product);

module.exports = {
    productModel,
}