import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel(/* transition */) {
    this.transitionTo('messages'); // Implicitly aborts the on-going transition.
  }

});
