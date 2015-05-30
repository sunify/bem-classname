import assert from 'assert';
import applyMods from '../src/applyMods';

describe('applyMods', function() {

	it('should return base className', function() {
		assert.equal('base', applyMods('base'));
		assert.equal('base', applyMods('base', null));
		assert.equal('base', applyMods('base', undefined));
		assert.equal('base', applyMods('base', {}));
		assert.equal('base', applyMods('base', []));
	});

	it('should return base className with mods from array', function() {
		assert.equal('base base--mod', applyMods('base', ['mod', undefined, null]));
		assert.equal('base base--mod base--mod2', applyMods('base', ['mod', 'mod2', false && 'mod3']));
	});

	it('should return base className with mods from object', function() {
		assert.equal('base base--mod', applyMods('base', {
			mod: true,
			mod2: undefined,
			mod3: null,
			mod4: false,
			mod5: '',
			mod6: 0,
		}));
	});

});