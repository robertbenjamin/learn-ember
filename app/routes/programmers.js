import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Ada Lovelace', 'Douglas C. Engelbart', 'Edward Snowden'];
  }
});
