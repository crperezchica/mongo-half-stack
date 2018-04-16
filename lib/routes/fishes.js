const fish = require('../models/fish');

const post = (req, res) => {
    fish.insert(req.body).then(saved => {
        res.send(saved);
    });
};


