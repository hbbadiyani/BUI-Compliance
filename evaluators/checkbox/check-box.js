const { EvaluatorBuilder } = require('acrecore/dist/ACRECore');

const checkBoxEvaluator = require('./check-box.evaluator').default;

module.exports = EvaluatorBuilder.create('check-box').evaluateOnFinding('node')
    .evaluate(checkBoxEvaluator);
