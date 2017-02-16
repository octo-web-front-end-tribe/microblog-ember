import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveUsernameAndRedirectToMessages(username) {
      Ember.Logger.info(`username = ${username}`);
      this.transitionToRoute('messages');
    }
  }

});
