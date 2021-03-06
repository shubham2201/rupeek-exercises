function pageNotFoundHandler (req, res) {
    res.render( '404' );
}

function genericErrorHandler( err, req, res, next ) {
    res.status( err.status ).json({
        message: err.message
    });
}

module.exports = {
    pageNotFoundHandler,
    genericErrorHandler
};