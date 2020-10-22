const express = require('express');
const path = require( 'path' );

const router = express.Router();

router.get('/', (req, res) => {
    res.render( 'index', {
        title: 'Workshops App | Home',
        appTitle: 'Workshop App'
    });
});

module.exports = router;