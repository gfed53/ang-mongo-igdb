// jshint esversion: 6

const express = require('express');
const axios = require('axios');
const router = express.Router();

const config = require('../config');

// Make regular IGDB search with given query
// Body would contain query string, q.
router.post('/search', function(req, res) {
    console.log('req.body',req.body);

    let _url = '';
    let _q = req.body._q;

    let _req = {
			key: config.KEYS.igdbKey
		};

    axios.get(_url, {
    	params: _req
    })
    .then(_res => {
    	console.log('_res', _res);
    	res.json(_res.data);
    })
    .catch((error) => {
		  console.log('error', error);
		});
    
    
});

module.exports = router;