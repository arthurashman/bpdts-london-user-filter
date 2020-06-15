const express = require('express');
const request = require('request-promise');

let users = null

var options = {
  uri: 'https://bpdts-test-app.herokuapp.com/users',
  json: true
}

request(options)
  .then(data => {
     users = data
  })

const app = express();

app.get('/', (req, res) => res.status(200).send(users));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app
