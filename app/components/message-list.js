import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['message-list'],

  hasNoMessage: Ember.computed.empty('messages'),

  reverseMessages: Ember.computed('messages.[]', function () {
    return this.get('messages').toArray().reverse();
  })

});
