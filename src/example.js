// this is mandatory for dependency injection within our unit tests
import { window, Logger, helpers } from 'opendatalayer';

const logger = new Logger('opendatalayer-plugin-example');

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

  handleEvent(name, data) {
    logger.log('Event caught: ', name, data);
  }
}
