import Ember from 'ember';

const MessageItem = Ember.Component.extend({

});

MessageItem.reopenClass({
  positionalParams: ['message']
});


export default MessageItem;
