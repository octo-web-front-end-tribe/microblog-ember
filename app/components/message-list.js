import Ember from 'ember';

const MessageList = Ember.Component.extend({

  hasNoMessage: Ember.computed.empty('messages'),

  reverseMessages: Ember.computed('messages.[]', function () {
    return this.get('messages').toArray().reverse();
  })

});

MessageList.reopenClass({
  positionalParams: ['messages']
});

export default MessageList;
