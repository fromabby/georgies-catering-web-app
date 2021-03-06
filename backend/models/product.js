const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Please enter name maximum of 100 hehehe']
    },
    price_list: [
        {
            price: {
                type: String,
                required: [true, 'Please enter product price'],
                trim: true,
                maxLength: [7, 'Please enter name maximum of 100 hehehe'],
                default: 0.0
            },
            size: {
                type: String,
                required: [true, 'Please enter product size'],
                trim: true,
                maxLength: [10, 'Please enter name maximum of 100 hehehe']
            }
        }
    ],
    available: {
        type: Boolean,
        required: [true, 'Please enter product availability'],
        trim: true,
    },
    image: {
        type: String,
        // required: [true, 'Please enter product image']
    },
    category: {
        type: String,
        required: [true, 'Please enter product category'],
        trim: true
    }
})

module.exports = mongoose.model('Product', productSchema)