const { Requirement } = require('acrecore/dist/ACRECore');

const layoutContainerRequirement = require('./layout-container.requirement').default;

module.exports = Requirement.create('layout-container')
    .assessNodesHaving('layout-container')
    .ensureEachNode(
        'has-proper-layout-container',
        layoutContainerRequirement
    );
