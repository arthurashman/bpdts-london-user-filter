const request = require('supertest')
const app = require('../app')

describe('app', function(){

  let agent = null
  let server = null

  beforeEach((done) => {
    server = app.listen(3000, (err) => {
      if (err) return done(err);
       agent = request.agent(server);
       done();
    });
  });

  afterEach((done) => {
    server.close(done);
  });

  it('connects to server /', function(){
    return agent.get('/')
      .expect(200, "Hello world!")
  })
  
})