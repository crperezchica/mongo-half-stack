const { parse } = require('url');
const fishes = require('./routes/fishes');
const notFound = require('./routes/not-found');
const bodyParser = require('./body-parser');
// const { createReadStream } = require('fs');

const routes = {
    _proto_:null,
    fishes
};


module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    req.paths = parse(req.url).pathname.slice(1).split('/');
    const key = req.paths[0];
    const route = routes[key] || notFound;

    bodyParser(req)
        .then(body => {
            req.body = body;
            route(req, res);
        });
};

   