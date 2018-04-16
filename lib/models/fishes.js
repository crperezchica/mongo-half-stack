const mongo = require('../mongodb');

const { ObjectId } = require('mongodb');

module.exports = {
    find() {
        return mongo.then(db => {
            return db.collection('fishes')
                .find().sort({ name: 1 })
                .toArray();
        });
    },
};