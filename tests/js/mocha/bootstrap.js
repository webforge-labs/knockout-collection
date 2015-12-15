var expect = require('chai').expect;
var path = require('path');
var requirejs = require('requirejs');

module.exports = {
  expect: expect,
  root: path.join(__dirname, '..', '..', '..'),
  requirejs: requirejs,

  file: function (sub) {
    return path.resolve(this.root+'/'+sub);
  }
};

requirejs.config({
  nodeRequire: require,
  baseUrl: 'src/js/',
  paths: {
    'knockout-collection': module.exports.file('index')
    // note that knockout and knockout-mapping are loaded with nodeRequire
  }
});