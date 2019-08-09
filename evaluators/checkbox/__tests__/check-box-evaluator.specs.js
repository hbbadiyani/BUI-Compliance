const checkBoxEvaluator = require('../check-box.evaluator').default;

describe('CheckBox', () => {
    it('It should pass if the checkbox is present', () => {
        const json1 = {
            element: {
                matches: jest.fn().mockImplementation(
                    () => true
                )
            }
        };
        expect(checkBoxEvaluator(json1)).toBe(json1);
    });
    it('It should fail if the checkbox is not present', () => {
        const json2 = {
            element: {
                matches: jest.fn().mockImplementation(
                    () => false
                )
            }
        };
        expect(checkBoxEvaluator(json2)).toBe(undefined);
    });
});
