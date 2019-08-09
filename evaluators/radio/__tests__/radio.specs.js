const radioEvaluator = require('../radio.evaluator').default;

describe('Radio', () => {
    it('It should pass if the radio is present', () => {
        const json1 = {
            element: {
                matches: jest.fn().mockImplementation(
                    () => true
                )
            }
        };
        expect(radioEvaluator(json1)).toBe(json1);
    });
    it('It should fail if the radio is not present', () => {
        const json2 = {
            element: {
                matches: jest.fn().mockImplementation(
                    () => false
                )
            }
        };
        expect(radioEvaluator(json2)).toBe(undefined);
    });
});
