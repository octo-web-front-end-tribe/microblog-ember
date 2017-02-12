import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    submitMessage() {
      this.sendAction('onSubmit', this.get('content'));
      this.set('content', null);
    }
  }
});
