const { EvaluatorBuilder } = require('acrecore/dist/ACRECore');

const layoutContainerEvaluator = require('./layout-container.evaluator').default;

module.exports = EvaluatorBuilder.create('layout-container').evaluateOnFinding('node')
    .evaluate(layoutContainerEvaluator);
