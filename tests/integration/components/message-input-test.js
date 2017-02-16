import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

describe.only('Integration | Component | Message input', function() {

  setupComponentTest('message-input', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{message-input}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should render an input field', function () {
    // when
    this.render(hbs`{{message-input}}`);

    // then
    expect(this.$('.message-input__content')).to.have.length(1);
  });

  it('should publish message', function () {
    // given
    const content = 'Message content';
    let actionCalled = false;
    let receivedContent = null;
    this.on('publishMessage', function (passedContent) {
      Ember.Logger.info('It works!');
      actionCalled = true;
      receivedContent = passedContent;
    });

    this.render(hbs`{{message-input action=(action "publishMessage")}}`);

    const $contentInput = this.$('.message-input__content');
    $contentInput.val(content);
    $contentInput.change();

    // when
    return wait().then(() => {
      const e = Ember.$.Event("keypress");
      e.which = 13; //enter button code
      e.keyCode = 13;
      $contentInput.trigger(e);

      // then
      expect(actionCalled).to.be.true;
      expect(receivedContent).to.equal(content);
    });
  });
});
