const { Requirement } = require('acrecore/dist/ACRECore');

const radioRequirement = require('./radio.requirement').default;

module.exports = Requirement.create('radio')
    .assessNodesHaving('radio')
    .ensureEachNode(
        'has-proper-radio',
        radioRequirement
    );
