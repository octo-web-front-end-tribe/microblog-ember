import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | identification form', function() {
  setupComponentTest('identification-form', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#identification-form}}
    //     template content
    //   {{/identification-form}}
    // `);

    this.render(hbs`{{identification-form}}`);
    expect(this.$()).to.have.length(1);
  });
});
