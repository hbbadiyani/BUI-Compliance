const layoutContainerEvaluator = require('../layout-container.evaluator').default;

describe('LayoutContainer', () => {
    it('It should pass if the layout-container is proper', () => {
        const json1 = {
            element: {
                matches: jest.fn().mockImplementation(
                    () => true
                )
            }
        };
        expect(layoutContainerEvaluator(json1)).toBe(json1);
    });
    it('It should fail if the layout-container is not proper', () => {
        const json2 = {
            element: {
                matches: jest.fn().mockImplementation(
                    () => false
                )
            }
        };
        expect(layoutContainerEvaluator(json2)).toBe(undefined);
    });
});
