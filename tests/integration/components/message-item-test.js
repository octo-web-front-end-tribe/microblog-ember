import Ember from 'ember';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | Message item', function() {
  setupComponentTest('message-item', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#message-item}}
    //     template content
    //   {{/message-item}}
    // `);

    this.render(hbs`{{message-item}}`);
    expect(this.$()).to.have.length(1);
  });

  it('should display "author" name', function () {
    // given
    const message = Ember.Object.create({
      author: 'John Doe'
    });
    this.set('message', message);

    // when
    this.render(hbs`{{message-item message=message}}`);

    // then
    const $author = this.$('.message-item__author');
    expect($author).to.have.length(1);
    expect($author.text().trim()).to.equal(message.get('author'));
  });

  it('should display "content" name', function () {
    // given
    const message = Ember.Object.create({
      content: 'Lorem ipsum dolor sit amet'
    });
    this.set('message', message);

    // when
    this.render(hbs`{{message-item message=message}}`);

    // then
    const $content = this.$('.message-item__content');
    expect($content).to.have.length(1);
    expect($content.text().trim()).to.equal(message.get('content'));
  });
});
