import DS from 'ember-data';
import ENV from 'microblog-ember/config/environment';

export default DS.RESTAdapter.extend({

  host: ENV.APP.apiHost,
  namespace: ENV.APP.apiNamespace

});
