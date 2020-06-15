module.exports = function(lat, lon, lat_center, lon_center){
  return (3956.5 * Math.acos(Math.cos(radians(lat)) * Math.cos(radians(lat_center)) * Math.cos(radians(lon_center) - radians(lon)) + Math.sin(radians(lat)) * Math.sin(radians(lat_center))));
}

const radians = degrees => {
  var TAU = 2 * Math.PI;
  return degrees * TAU / 360;
}