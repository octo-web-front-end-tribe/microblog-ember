import Ember from 'ember';

export default Ember.Component.extend({

  // properties
  username: null,

  actions: {
    submitUsername() {
      this.get('action')(this.get('username'));
    }
  }

});
