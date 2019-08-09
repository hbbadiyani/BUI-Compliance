const layoutContainerRequirement = require('../layout-container.requirement').default;

describe('Layout-Container Requirement', () => {
    it('it should pass a proper layout-container ', () => {
        const properlayoutContainer = {
            htmlElement: {
                childElementCount: 1,
                firstElementChild: {
                    matches: jest.fn().mockImplementation(
                        () => true
                    )
                }
            }
        };
        expect(layoutContainerRequirement(properlayoutContainer)).toBe(true);
    });
    it('it should fail a improper layout-container ', () => {
        const improperlayoutContainer = {
            htmlElement: {
                childElementCount: 2,
                firstElementChild: {
                    matches: jest.fn().mockImplementation(
                        () => false
                    )
                }
            }
        };
        expect(layoutContainerRequirement(improperlayoutContainer)).toBe(false);
    });
});
