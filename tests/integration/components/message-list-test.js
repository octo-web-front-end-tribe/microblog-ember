import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | message list', function() {
  setupComponentTest('message-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#message-list}}
    //     template content
    //   {{/message-list}}
    // `);

    this.render(hbs`{{message-list}}`);
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
});
