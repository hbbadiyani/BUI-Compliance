const { Requirement } = require('acrecore/dist/ACRECore');

const checkBoxRequirement = require('./check-box.requirement').default;

module.exports = Requirement.create('check-box')
    .assessNodesHaving('check-box')
    .ensureEachNode(
        'has-proper-check-box',
        checkBoxRequirement
    );
