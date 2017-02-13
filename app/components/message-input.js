import Ember from 'ember';

export default Ember.Component.extend({

  // private
  status: null,

  observeStatus: Ember.computed('status', function () {
    Ember.Logger.info('status = ' + this.get('status'));
  }),

  actions: {
    submitMessage() {
      this.get('action')(this.get('content')).then(() => {
        this.set('content', null);
      });
    }
  }
});
