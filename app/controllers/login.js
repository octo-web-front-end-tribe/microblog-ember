import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service(),

  actions: {
    authenticate(username) {
      this.get('session').authenticate('authenticator:simple', username);
    }
  }

});
