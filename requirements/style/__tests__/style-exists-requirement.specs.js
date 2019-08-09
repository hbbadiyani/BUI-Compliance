const styleExistsRequirement = require('../style-exists.requirement').default;

describe('StyleExists', () => {
    it('It should pass if inline style is not present', () => {
        expect(styleExistsRequirement(undefined)).toBe(true);
    });
    it('It should fail if inline style is present', () => {
        expect(styleExistsRequirement('s tr')).toBe(false);
        expect(styleExistsRequirement('')).toBe(false);
    });
});
