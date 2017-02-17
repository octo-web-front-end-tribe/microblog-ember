import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

let application;

describe.skip('Acceptance | Page | messages', function () {

  beforeEach(function () {
    application = startApp();
  });

  afterEach(function () {
    destroyApp(application);
  });

  beforeEach(function () {
    visit('/messages');
  });

  it('can visit /messages', function () {
    expect(currentURL()).to.equal('/messages');
  });

  it('should render the message list', function () {
    findWithAssert('.message-list');
  });

  it('should render the message input', function () {
    findWithAssert('.message-input');
  });

  it('should update message list when message input is submitted', function () {
    // given
    const $messagesLength = find('.message-item').length;
    const messageContent = 'Some message content';

    // when
    fillIn('.message-input__field', messageContent);
    keyEvent('.message-input__field', 'keyup', '13');

    // then
    andThen(() => {
      expect(find('.message-item')).to.have.length($messagesLength + 1);
    });
  });

});
