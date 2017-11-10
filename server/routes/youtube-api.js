// jshint esversion: 6

const express = require('express');
const axios = require('axios');
const router = express.Router();

const config = require('../config');

// Make regular YouTube search with given query
// Body would contain query string, q.
router.post('/search-videos', function(req, res) {
    console.log('req.body',req.body);

    let _url = 'https://www.googleapis.com/youtube/v3/search';
    let _q = req.body._q;

    let _req = {
			key: config.KEYS.googKey,
			part: 'snippet',
			maxResults: 50,
			q: _q,
			type: 'video',
			videoEmbeddable: true,
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