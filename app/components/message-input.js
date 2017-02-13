import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submitMessage() {
      this.sendAction('submitHandler', this.get('content'));
      this.set('content', null);
    }
  }
});
