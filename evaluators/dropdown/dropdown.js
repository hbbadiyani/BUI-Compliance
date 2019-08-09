const { EvaluatorBuilder } = require('acrecore/dist/ACRECore');

const dropdownEvaluator = require('./dropdown.evaluator.js').default;

module.exports = EvaluatorBuilder.create('dropdown').evaluateOnFinding('node')
    .evaluate(dropdownEvaluator);
