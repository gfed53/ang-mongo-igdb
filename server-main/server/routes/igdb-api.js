// jshint esversion: 6

const express = require('express');
const axios = require('axios');
const igdb = require('igdb-api-node').default;
const router = express.Router();

const config = require('../config');

const client = igdb(config.KEYS.igdbKey);

// Make regular IGDB search with given query
// Body would contain query string, q.
router.post('/search-games', function(req, res) {
    console.log('req.body',req.body);

    //Test for now
    client.games({
        fields: '*', // Return all fields
        limit: 5, // Limit to 5 results
        offset: 15 // Index offset for results
    }).then(response => {
        // response.body contains the parsed JSON response to this query
        res.json(response);
    }).catch(error => {
        throw error;
    });

    // res.json({test: 'okay'});
    
    
});

module.exports = router;