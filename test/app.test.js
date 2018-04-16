require('dotenv').config({ path: './test/.env'});
const mongo = require('../lib/mongodb');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe ('fish API', () => {

    before(() => {
        return mongo.then(db => {
            db.collection('fishes').remove();
        });
    });

    let fish = {
        name: 'Nemo',
        type: 'Clownfish'
    };

    it('saves a fish', () => {
        return chai.request(app)
            .post('/fishes')
            .send(fish)
            .then(({ body }) => {
                assert.ok(body._id);
                assert.equal(body.name, fish.name);
                fish = body;
            });
    });
              
   
});