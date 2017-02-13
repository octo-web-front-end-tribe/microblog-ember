import Ember from 'ember';

const MessageList = Ember.Component.extend({

  reverseMessages: Ember.computed('messages.[]', function () {
    return this.get('messages').toArray().reverse();
  })

});

MessageList.reopenClass({
  positionalParams: ['messages']
});

export default MessageList;
