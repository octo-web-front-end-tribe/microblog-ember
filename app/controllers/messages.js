import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service(),

  actions: {
    publishMessage(messageContent) {
      const store = this.get('store');
      const username = this.get('session.data.authenticated.username');
      const message = store.createRecord('message', {
        author: username,
        content: messageContent
      });
      return message.save();
    }
  }

});
