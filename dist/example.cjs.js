'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // this is mandatory for dependency injection within our unit tests


var _opendatalayer = require('opendatalayer');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _opendatalayer.Logger('opendatalayer-plugin-example');

/**
 * Example ODL plugin
 */

var Example = function () {
  function Example(odl, data, config) {
    _classCallCheck(this, Example);

    console.log('initialize');

    // if page.type is "homepage", do something in window
    if (data.page.type === 'homepage') {
      // window.doSomething('foo');
    } else {
        // window.doSomethingElse('bar');
      }

    _opendatalayer.helpers.addScript('//foo/bar/test.js');
  }

  _createClass(Example, [{
    key: 'handleEvent',
    value: function handleEvent(name, data) {
      console.log('Event caught: ', name, data);
    }
  }]);

  return Example;
}();

exports.default = Example;
