const expect = require('chai').expect;

const calculateDistance = require('../modules/calculateDistance');

describe('#calculateDistance()', function() {
    it('should return 0 when centre coordinates equal user coordinates', function() {
      expect(calculateDistance(lat = 0, lon = 0, lat_center = 0, lon_center = 0)).to.equal(0)
    })
  })