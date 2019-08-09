const radioRequirement = require('../radio.requirement').default;

describe('Radio Requirement', () => {
    it('it should pass an proper radio button ', () => {
        const properRadio = {
            htmlElement: {
                childElementCount: 1,
                firstElementChild: {
                    tagName: 'LABEL',
                    childElementCount: 1,
                    firstElementChild: {
                        tagName: 'INPUT'
                    }
                }
            }
        };
        expect(radioRequirement(properRadio)).toBe(true);
    });
    it('it should fail an improper radio button ', () => {
        const improperRadio = {
            htmlElement: {
                childElementCount: 1,
                firstElementChild: {
                    tagName: 'INPUT',
                    childElementCount: 1,
                    firstElementChild: {
                        tagName: 'LABEL'
                    }
                }
            }
        };
        expect(radioRequirement(improperRadio)).toBe(false);
    });
    it('it should fail an improper radio button ', () => {
        const improperRadio = {
            htmlElement: {
                childElementCount: 1,
                firstElementChild: {
                    tagName: 'LABEL',
                    childElementCount: 1,
                    firstElementChild: {
                        tagName: 'LABEL'
                    }
                }
            }
        };
        expect(radioRequirement(improperRadio)).toBe(false);
    });
});
