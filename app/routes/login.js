import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { Route } = Ember;

export default Route.extend(UnauthenticatedRouteMixin, {

  session: Ember.inject.service('session'),

  actions: {
    identify(username) {
      this.get('session').authenticate('authenticator:simple', username);
    }
  }

});
