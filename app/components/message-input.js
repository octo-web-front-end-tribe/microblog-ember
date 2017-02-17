import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submitMessage() {
      this.get('action')(this.get('content')).then(() => {
        this.set('content', null);
      });
    }
  }

});
