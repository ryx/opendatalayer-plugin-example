import { describe, it, beforeEach } from 'mocha';
import * as sinon from 'sinon';
import System from 'systemjs';
import mockModule from 'systemjs-mock-module';
import '../systemjs.config';

describe('Example', () => {
  let [Plugin, odlMock, odlDataMock, configMock, loggerSpy] = [];

  beforeEach(() => {
    // ODL core API mock
    loggerSpy = { log: sinon.spy() };
    odlMock = {
      window: {
        doSomething: sinon.spy(),
        doSomethingElse: sinon.spy(),
      },
      helpers: {
        addScript: sinon.spy(),
      },
      Logger: () => loggerSpy,
    };
    // ODL global data mock
    odlDataMock = {
      page: { type: 'homepage', name: 'Homepage' },
      site: { id: 'Test' },
    };
    // plugin configuration mock
    configMock = {};
    // register mocks
    mockModule(System, 'opendatalayer', odlMock);
    // delete and reimport module
    System.delete(System.normalizeSync('src/example'));
    return System.import('src/example').then((m) => {
      Plugin = m.default;
    }).catch(err => console.error(err));
  });

  it('should do something for page.type "homepage"', () => {
    odlDataMock.page.type = 'homepage';
    new Plugin(odlMock, odlDataMock, configMock);
    sinon.assert.calledWith(odlMock.window.doSomething);
  });

  it('should do something else for another page.type', () => {
    odlDataMock.page.type = 'blablabla';
    new Plugin(odlMock, odlDataMock, configMock);
    sinon.assert.calledWith(odlMock.window.doSomethingElse);
  });

  it('should add the foobar script', () => {
    new Plugin(odlMock, odlDataMock, configMock);
    sinon.assert.calledWith(odlMock.helpers.addScript, '//foo/bar/test.js');
  });

  it('should recognize and handle a runtime event', () => {
    const p = new Plugin(odlMock, odlDataMock, configMock);
    p.handleEvent('foo', 'bar');
    sinon.assert.calledWith(loggerSpy.log, sinon.match('Event caught:', 'foo', 'bar'));
  });
});
