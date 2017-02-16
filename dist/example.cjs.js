'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _opendatalayer = require('opendatalayer');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // this is mandatory for dependency injection within our unit tests


var logger = new _opendatalayer.Logger('odl/plugins/testing');

/**
 * Example ODL plugin
 */

var Example = function Example(odl, data, config) {
  _classCallCheck(this, Example);

  logger.log('initialize');

  // if page.type is "homepage", do something in window
  if (data.page.type === 'homepage') {
    _opendatalayer.window.doSomething('foo');
  } else {
    _opendatalayer.window.doSomethingElse('bar');
  }

  _opendatalayer.helpers.addScript('//foo/bar/test.js');
};

exports.default = Example;
