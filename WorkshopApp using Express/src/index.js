const express = require( 'express' );
const indexRouter = require( './routes/index' );
const workshopsRouter = require( './routes/workshops' );
const apiWorkshopsRouter = require( './routes/api/workshops' );
const path = require( 'path' );
const { pageNotFoundHandler, genericErrorHandler } = require('./middleware/errors');

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ));
app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( indexRouter );
app.use( '/workshops', workshopsRouter );
app.use( '/api/workshops', apiWorkshopsRouter );

// app.use( pageNotFoundHandler );
// app.use( genericErrorHandler );

const port = process.env.PORT || 3000;

app.listen( port, function( err ) {
    if( err ) {
        console.error( err.message );
        return;
    }

    console.log( `Server running on http://localhost:${port}` );
});