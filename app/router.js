import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('index');
  this.route('about');
  this.route('login');
  this.route('logout');
  this.route('messages', { path: '/' });
});

export default Router;
