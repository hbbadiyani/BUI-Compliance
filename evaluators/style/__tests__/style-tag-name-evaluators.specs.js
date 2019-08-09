const styleExistsEvaluator = require('../style-exists.evaluator').default;

describe('StyleTagname', () => {
    it('it should fail if an inline style is present', () => {
        const json1 = {
            htmlElement: {
                getAttribute: jest.fn().mockImplementation(
                    () => 'str'
                )
            }
        };
        expect(styleExistsEvaluator(json1)).toBe('str');
    });
    it('it should fail if an inline style is present', () => {
        const json2 = {
            htmlElement: {
                getAttribute: jest.fn().mockImplementation(
                    () => undefined
                )
            }
        };
        expect(styleExistsEvaluator(json2)).toBe(undefined);
    });
});
