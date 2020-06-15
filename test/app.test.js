const request = require('supertest')
const app = require('../app')

describe('app', function(){
  it("returns all users and status code 200", function(done) {
    request(app)
      .get("/")
      .expect(200)
      .end(function(err, res) {
        res.body.length == 1000
        done();
      });
  });
})