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
    'ko': module.exports.file('node_modules/knockout/build/output/knockout-latest.debug'),
    'knockout-collection': module.exports.file('index'),
    'knockout-mapping': module.exports.file('node_modules/knockout-mapping/dist/knockout-mapping')
  }
});