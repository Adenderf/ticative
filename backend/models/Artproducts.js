const mongoose = require('mongoose');

const ArtproductSchema = new mongoose.Schema({
    productName : String,
    productDesc : String,
    price : Number,
    productPhoto : Buffer,
    status: String,
    artist : {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cart: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    }
});

module.exports = mongoose.model('Artproduct', ArtproductSchema);