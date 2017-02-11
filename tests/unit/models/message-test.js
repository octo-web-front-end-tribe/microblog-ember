import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | message', function () {

    setupModelTest('message', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
    });

    // Replace this with your real tests.
    it('exists', function () {
      const model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });
  }
);
