const express = require( 'express' );
const path = require( 'path' );
const { getWorkshops, getWorkshopsById } = require( '../controllers/workshops' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    let workshops, error;

    try {
        workshops = getWorkshops();
    } catch( err ) {
        error = err;
    }

    res.render( 'workshops', {
        error,
        workshops
    });
});

router.get( '/:id', ( req, res ) => {
    let workshop, error;

    try{
        workshop = getWorkshopsById(req.params.id);
        console.log(workshop);
    } catch ( err ) {
        error = err;
    }
    

    res.render( 'workshop-details', {
        error,
        workshop
    })
});

module.exports = router;