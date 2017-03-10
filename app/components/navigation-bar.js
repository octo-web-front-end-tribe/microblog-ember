import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['navigation-bar'],

  session: Ember.inject.service('session')

});
