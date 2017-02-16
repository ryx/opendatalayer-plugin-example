// this is mandatory for dependency injection within our unit tests
import { window, Logger, helpers } from 'opendatalayer';

const logger = new Logger('odl/plugins/testing');

/**
 * Example ODL plugin
 */
export default class Example {

  constructor(odl, data, config) {
    logger.log('initialize');

    // if page.type is "homepage", do something in window
    if (data.page.type === 'homepage') {
      window.doSomething('foo');
    } else {
      window.doSomethingElse('bar');
    }

    helpers.addScript('//foo/bar/test.js');
  }
}
