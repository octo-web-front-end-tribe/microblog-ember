import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  session: Ember.inject.service('session'),

  model() {
    const store = this.get('store');
    return store.findAll('message');
  },

  actions: {
    publishMessage(messageContent) {
      const store = this.get('store');
      const username = this.get('session.data.authenticated.username') ? this.get('session.data.authenticated.username') : 'Moi';
      const message = store.createRecord('message', {
        author: username,
        content: messageContent
      });
      return message.save();
    }
  }

});
