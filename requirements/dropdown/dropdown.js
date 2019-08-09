const { Requirement } = require('acrecore/dist/ACRECore');

const dropdownRequirement = require('./dropdown.requirement.js').default;

module.exports = Requirement.create('dropdown')
    .assessNodesHaving('dropdown')
    .ensureEachNode(
        'has-proper-dropdown',
        dropdownRequirement
    );
