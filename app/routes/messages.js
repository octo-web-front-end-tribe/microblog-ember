import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const store = this.get('store');
    return store.findAll('message');
  },

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
