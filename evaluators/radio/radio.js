const { EvaluatorBuilder } = require('acrecore/dist/ACRECore');

const radioEvaluator = require('./radio.evaluator').default;

module.exports = EvaluatorBuilder.create('radio').evaluateOnFinding('node')
    .evaluate(radioEvaluator);
