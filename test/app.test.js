// require('dotenv').config();
require('dotenv').config({ path: './test/.env' });
const mongo = require('../lib/mongodb');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe ('fishes API', () => {

    before(() => {
        return mongo.then(db => {
            db.collection('fishes').remove();
        });
    });
    after (() => mongo.client.close());

    let clownfish = {
        name: 'amphiprioninae',
        class: 'actinopterygii',
    };

    let guppy = {
        name: 'poecilia reticulata',
        class: 'actinopterygii',
    };

    before(() => {
        return chai.request(app)
            .post('/fishes')
            .send(clownfish)
            .then(({ body }) => {
                clownfish = body;
            });
    });

    it('saves a fish', () => {
        assert.ok(clownfish._id);
    });
    // it('saves a fish', () => {
    //     return chai.request(app)
    //         .post('/fishes')
    //         .send(fish)
    //         .then(({ body }) => {
    //             assert.ok(body._id);
    //             assert.equal(body.name, fish.name);
    //             fish = body;
    //         });
    // });
              
   
});