import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

let application;

describe('basic acceptance test', function() {

  beforeEach(function () {
    application = startApp();
  });

  afterEach(function () {
    destroyApp(application);
  });

  it('can visit /', function() {
    // when
    visit('/');

    // then
    return andThen(() => {
      expect(currentURL()).to.equal('/');
    });
  });

  it('should render the message list', function () {
    // when
    visit('/');

    // then
    return andThen(() => {
      findWithAssert('.message-list');
    });
  });

  it('should render the message input', function () {
    // when
    visit('/');

    // then
    return andThen(() => {
      findWithAssert('.message-input');
    });
  });

});
