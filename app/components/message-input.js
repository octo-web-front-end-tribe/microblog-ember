import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['message-input'],

  actions: {
    submitMessage() {
      this.sendAction('action', this.get('content'));
      this.set('content', null);
    }
  }

});
