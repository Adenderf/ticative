const express = require('express');
const router = express.Router();

//Model
const User = require('../models/Users');
const artProduct = require('../models/Artproducts');

// Add new artProduct
router.post('/:id', ( request, response ) => {
    let newArtProduct = new artProduct ({
        ...request.body,
        artist: request.params.id
    });
    newArtProduct.save().then( result => {
        response.send({ 
            status: " Added New Art Product",
            result: result
                                        
        })
    });
});

module.exports = router;