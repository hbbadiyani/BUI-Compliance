const { EvaluatorBuilder } = require('acrecore/dist/ACRECore');

const styleExistsEvaluator = require('./style-exists.evaluator').default;

module.exports = EvaluatorBuilder.create('style-tag-name').evaluateOnFinding('node')
    .evaluate(styleExistsEvaluator);
