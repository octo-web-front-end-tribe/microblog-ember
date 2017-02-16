import Ember from 'ember';

export default Ember.Component.extend({

  // properties
  status: null,

  // computed
  observeStatus: Ember.computed('status', function () {
    Ember.Logger.info('status = ' + this.get('status'));
  }),

  actions: {
    submitMessage() {
      Ember.Logger.info('YEAH!');
      this.get('action')(this.get('content')).then(() => {
        this.set('content', null);
      });
    }
  }
});
