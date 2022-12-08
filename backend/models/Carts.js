const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    quantity : Number,
    totalCost : Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orders : [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});
module.exports = mongoose.model('Cart', CartSchema);
