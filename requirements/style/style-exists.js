const { Requirement } = require('acrecore/dist/ACRECore');

const styleExistsRequirement = require('./style-exists.requirement').default;

module.exports = Requirement.create('style-exists')
    .assessNodesHaving('style-tag-name')
    .ensureEachNode(
        'has-style',
        styleExistsRequirement
    );
