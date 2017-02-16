import Ember from 'ember';

export default Ember.Component.extend({

  // properties
  username: null,

  // actions
  onSubmit: null,

  actions: {
    submitUsername() {
      this.get('onSubmit')(this.get('username'));
    }
  }
});
