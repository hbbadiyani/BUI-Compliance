const checkBoxRequirement = require('../check-box.requirement').default;

describe('CheckBox Requirement', () => {
    it('it should pass an proper checkbox ', () => {
        const properCheckBox = {
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
        expect(checkBoxRequirement(properCheckBox)).toBe(true);
    });
    it('it should fail an improper checkbox ', () => {
        const improperCheckBox = {
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
        expect(checkBoxRequirement(improperCheckBox)).toBe(false);
    });
    it('it should fail an improper checkbox ', () => {
        const improperCheckBox = {
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
        expect(checkBoxRequirement(improperCheckBox)).toBe(false);
    });
});
