const express = require('express');
const request = require('request-promise');

const calculateDistance = require('./modules/calculateDistance')

let londonUsers = null

var options = {
  uri: 'https://bpdts-test-app.herokuapp.com/users',
  json: true
}

request(options)
  .then(users => {
    londonUsers = users.filter(user => {
      return calculateDistance(user.latitude, user.longitude, 51.50853, -0.12574) < 50
    })
  })

const app = express();

app.get('/', (req, res) => res.status(200).send(londonUsers));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app
