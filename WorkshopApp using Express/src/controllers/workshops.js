const workshops = require( '../data/workshops.json' );

function getWorkshops() {
    return workshops;
}

function sendWorkshops(req, res) {
    res.json(workshops);
}

function getWorkshopsById(id) {
    id = parseInt(id);
    return workshops[id-1];
}

function sendWorkshopsById( id ) {
    id = parseInt(id);
    return workshops[id-1] ;
}

module.exports = {
    getWorkshops,
    sendWorkshops,
    sendWorkshopsById,
    getWorkshopsById
};