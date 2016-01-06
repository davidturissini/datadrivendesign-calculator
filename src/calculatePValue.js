'use strict';

var normDist = require('./normDist');

function conversionRate (conversions, visitors) {
    return conversions / visitors;
}

function testConversionRate (test) {
    return conversionRate(test.conversions, test.visitors);
}

function standardError (conversionRate, visitors) {
    return Math.sqrt(conversionRate * (1 - conversionRate) / visitors);
}


function calculateConfidence (control, variation) {
    var controlConversionRate = testConversionRate(control);
    var variationConversionRate = testConversionRate(variation);

    var controlStandardError = standardError(controlConversionRate, control.visitors);
    var variationStandardError = standardError(variationConversionRate, variation.visitors);

    var zScore = (controlConversionRate - variationConversionRate) / Math.sqrt(Math.pow(controlStandardError, 2) + Math.pow(variationStandardError, 2));

    var pValue = normDist(zScore, 0, 1);

    return pValue;

}

module.exports = calculateConfidence;
