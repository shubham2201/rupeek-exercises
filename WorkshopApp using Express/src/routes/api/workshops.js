const express = require( 'express' );
const path = require( 'path' );
const { sendWorkshops, sendWorkshopsById } = require( '../../controllers/workshops' );

const router = express.Router();

router.get( '/', sendWorkshops );

router.get( '/:id', ( req, res ) => {
    res.json( sendWorkshopsById(req.params.id) );
});

module.exports = router;