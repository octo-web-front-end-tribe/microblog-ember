import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    publishMessage(messageContent) {
      const store = this.get('store');
      const message = store.createRecord('message', {
        author: 'J. Doe',
        content: messageContent
      });
      message.save();
    }
  }

});
