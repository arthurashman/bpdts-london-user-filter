const expect = require('chai').expect;

const calculateDistance = require('../modules/calculateDistance');

describe('#calculateDistance()', function() {
    it('should return 0 when centre coordinates equal user coordinates', function() {
      expect(calculateDistance(lat = 0, lon = 0, lat_center = 0, lon_center = 0)).to.equal(0)
    })
    
    it('should return correct distance for differing latitudes', function() {
      expect(calculateDistance(lat = -1, lon = 3, lat_center =-2, lon_center = 3)).to.equal(69.05395185514875)
    })

    it('should return correct distance for differing longitudes', function() {
      expect(calculateDistance(lat = -1, lon = 1, lat_center =-1, lon_center = 3)).to.equal(138.0868670720206)
    })

    it('should return correct distance for differing coordinates', function() {
      expect(calculateDistance(lat = -1, lon = 1, lat_center =-2, lon_center = 3)).to.equal(154.3654273546793)
    })
  })