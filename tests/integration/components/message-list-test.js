import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | Message list', function() {
  setupComponentTest('message-list', {
    integration: true
  });

  it('renders', function() {
    this.set('messages', []);
    this.render(hbs`{{message-list messages}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should render 1 message item if "messages" param contains 1 element', function () {
    // given
    const messages = [];
    messages.push(Ember.Object.create());
    this.set('messages', messages);

    // when
    this.render(hbs`{{message-list messages}}`);

    // then
    expect(this.$('.message-item')).to.have.length(1);
  });

  it('should render 2 message item if "messages" param contains 2 elements', function () {
    // given
    const messages = [];
    messages.push(Ember.Object.create());
    messages.push(Ember.Object.create());
    this.set('messages', messages);

    // when
    this.render(hbs`{{message-list messages}}`);

    // then
    expect(this.$('.message-item')).to.have.length(2);
  });

  it('should display messages in reverse order', function () {
    // given
    const messages = [];
    messages.push(Ember.Object.create({ author: 'author_1', content: 'message_1' }));
    messages.push(Ember.Object.create({ author: 'author_2', content: 'message_2'}));
    messages.push(Ember.Object.create({ author: 'author_3', content: 'message_3'}));
    this.set('messages', messages);

    // when
    this.render(hbs`{{message-list messages}}`);

    // then
    const $messages = this.$('.message-item');
    expect($messages[0].textContent).to.contain('message_3');
    expect($messages[1].textContent).to.contain('message_2');
    expect($messages[2].textContent).to.contain('message_1');
  });});
