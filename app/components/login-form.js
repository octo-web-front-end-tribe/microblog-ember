import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['login-form'],

  username: null,

  actions: {
    submitUsername() {
      this.sendAction('action', this.get('username'));
    }
  }

});
